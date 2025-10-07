-- ============================================
-- INIT SCHEMA (Tables, Indexes, Procedures)
-- ============================================

-- Drop if re-running
DROP VIEW IF EXISTS CustomerOrders;
DROP VIEW IF EXISTS ActiveUsers;
DROP TABLE IF EXISTS Payments;
DROP TABLE IF EXISTS Order_Items;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Products;
DROP TABLE IF EXISTS Customers;
DROP TABLE IF EXISTS Users;

DROP PROCEDURE IF EXISTS RegisterUser;
DROP PROCEDURE IF EXISTS VerifyUserLogin;
DROP PROCEDURE IF EXISTS ChangePassword;
DROP PROCEDURE IF EXISTS ResetUserPassword;
DROP PROCEDURE IF EXISTS AddNewOrder;
DROP FUNCTION IF EXISTS GetOrderTotal;

-- Customers
CREATE TABLE Customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20)
);

-- Products
CREATE TABLE Products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL
);

-- Orders
CREATE TABLE Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATETIME DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'Pending',
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

-- Order Items
CREATE TABLE Order_Items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

-- Users
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    salt VARCHAR(64) NOT NULL,
    role ENUM('admin', 'manager', 'sales', 'viewer') DEFAULT 'sales',
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT NOW(),
    last_login DATETIME NULL,
    failed_login_attempts INT DEFAULT 0,
    locked_until DATETIME NULL,
    INDEX idx_username (username),
    INDEX idx_email (email)
);

ALTER TABLE Customers 
ADD COLUMN user_id INT NULL,
ADD FOREIGN KEY (user_id) REFERENCES Users(user_id);

-- Payments
CREATE TABLE Payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    payment_date DATETIME NOT NULL DEFAULT NOW(),
    method VARCHAR(20) NOT NULL DEFAULT 'Card',
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);

-- Indexes
CREATE INDEX idx_customer_email ON Customers(email);
CREATE INDEX idx_order_date ON Orders(order_date);
CREATE INDEX idx_product_name ON Products(name);

-- ============================================
-- Procedures & Functions
-- ============================================
DELIMITER //

CREATE PROCEDURE RegisterUser(
    IN p_username VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_password VARCHAR(255),
    IN p_role VARCHAR(20)
)
BEGIN
    DECLARE v_salt VARCHAR(64);
    DECLARE v_password_hash VARCHAR(255);
    SET v_salt = SHA2(CONCAT(p_username, NOW(), RAND()), 256);
    SET v_password_hash = SHA2(CONCAT(p_password, v_salt), 256);
    INSERT INTO Users (username, email, password_hash, salt, role)
    VALUES (p_username, p_email, v_password_hash, v_salt, p_role);
    SELECT LAST_INSERT_ID() as user_id, 'User registered successfully' as message;
END //

CREATE PROCEDURE VerifyUserLogin(
    IN p_username VARCHAR(50),
    IN p_password VARCHAR(255)
)
BEGIN
    DECLARE v_user_id INT;
    DECLARE v_stored_hash VARCHAR(255);
    DECLARE v_salt VARCHAR(64);
    DECLARE v_computed_hash VARCHAR(255);
    DECLARE v_is_active BOOLEAN;
    DECLARE v_locked_until DATETIME;
    DECLARE v_failed_attempts INT;
    SELECT user_id, password_hash, salt, is_active, locked_until, failed_login_attempts
    INTO v_user_id, v_stored_hash, v_salt, v_is_active, v_locked_until, v_failed_attempts
    FROM Users
    WHERE username = p_username;
    IF v_user_id IS NULL THEN
        SELECT 'FAILED' as status, 'Invalid username or password' as message;
    ELSEIF v_locked_until IS NOT NULL AND v_locked_until > NOW() THEN
        SELECT 'LOCKED' as status, CONCAT('Account locked until ', v_locked_until) as message;
    ELSEIF v_is_active = FALSE THEN
        SELECT 'INACTIVE' as status, 'Account is disabled' as message;
    ELSE
        SET v_computed_hash = SHA2(CONCAT(p_password, v_salt), 256);
        IF v_computed_hash = v_stored_hash THEN
            UPDATE Users 
            SET last_login = NOW(),
                failed_login_attempts = 0,
                locked_until = NULL
            WHERE user_id = v_user_id;
            SELECT 'SUCCESS' as status, 'Login successful' as message, v_user_id as user_id,
                   (SELECT role FROM Users WHERE user_id = v_user_id) as role;
        ELSE
            SET v_failed_attempts = v_failed_attempts + 1;
            IF v_failed_attempts >= 5 THEN
                UPDATE Users 
                SET failed_login_attempts = v_failed_attempts,
                    locked_until = DATE_ADD(NOW(), INTERVAL 30 MINUTE)
                WHERE user_id = v_user_id;
                SELECT 'LOCKED' as status, 'Account locked due to too many failed attempts' as message;
            ELSE
                UPDATE Users 
                SET failed_login_attempts = v_failed_attempts
                WHERE user_id = v_user_id;
                SELECT 'FAILED' as status, 'Invalid username or password' as message,
                       (5 - v_failed_attempts) as attempts_remaining;
            END IF;
        END IF;
    END IF;
END //

CREATE PROCEDURE ChangePassword(
    IN p_user_id INT,
    IN p_old_password VARCHAR(255),
    IN p_new_password VARCHAR(255)
)
BEGIN
    DECLARE v_stored_hash VARCHAR(255);
    DECLARE v_salt VARCHAR(64);
    DECLARE v_computed_hash VARCHAR(255);
    DECLARE v_new_salt VARCHAR(64);
    DECLARE v_new_hash VARCHAR(255);
    SELECT password_hash, salt INTO v_stored_hash, v_salt
    FROM Users WHERE user_id = p_user_id;
    SET v_computed_hash = SHA2(CONCAT(p_old_password, v_salt), 256);
    IF v_computed_hash = v_stored_hash THEN
        SET v_new_salt = SHA2(CONCAT(p_user_id, NOW(), RAND()), 256);
        SET v_new_hash = SHA2(CONCAT(p_new_password, v_new_salt), 256);
        UPDATE Users SET password_hash = v_new_hash, salt = v_new_salt
        WHERE user_id = p_user_id;
        SELECT 'SUCCESS' as status, 'Password changed successfully' as message;
    ELSE
        SELECT 'FAILED' as status, 'Current password is incorrect' as message;
    END IF;
END //

CREATE PROCEDURE ResetUserPassword(
    IN p_user_id INT,
    IN p_new_password VARCHAR(255)
)
BEGIN
    DECLARE v_new_salt VARCHAR(64);
    DECLARE v_new_hash VARCHAR(255);
    SET v_new_salt = SHA2(CONCAT(p_user_id, NOW(), RAND()), 256);
    SET v_new_hash = SHA2(CONCAT(p_new_password, v_new_salt), 256);
    UPDATE Users
    SET password_hash = v_new_hash,
        salt = v_new_salt,
        failed_login_attempts = 0,
        locked_until = NULL
    WHERE user_id = p_user_id;
    SELECT 'SUCCESS' as status, 'Password reset successfully' as message;
END //

CREATE PROCEDURE AddNewOrder (
    IN p_customer_id INT,
    IN p_product_id INT,
    IN p_quantity INT
)
BEGIN
    DECLARE new_order_id INT;
    INSERT INTO Orders (customer_id, order_date, status)
    VALUES (p_customer_id, NOW(), 'Pending');
    SET new_order_id = LAST_INSERT_ID();
    INSERT INTO Order_Items (order_id, product_id, quantity)
    VALUES (new_order_id, p_product_id, p_quantity);
    SELECT new_order_id as order_id, 'Order created successfully' as message;
END //

CREATE FUNCTION GetOrderTotal(p_order_id INT)
RETURNS DECIMAL(10,2)
READS SQL DATA
DETERMINISTIC
BEGIN
    DECLARE total DECIMAL(10,2);
    SELECT SUM(p.price * oi.quantity)
    INTO total
    FROM Order_Items oi
    JOIN Products p ON oi.product_id = p.product_id
    WHERE oi.order_id = p_order_id;
    RETURN IFNULL(total, 0.00);
END //

DELIMITER ;