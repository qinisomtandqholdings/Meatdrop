-- ============================================
-- SAMPLE DATA
-- ============================================

-- Customers
INSERT IGNORE INTO Customers (name, email, phone) VALUES 
('James Joe', 'james@gmail.com', '123-456-7890'),
('Michelle Ngele', 'michelle@gmail.com', '098-765-4321'),
('Brian Chesky', 'Brian@gmail.com', '555-123-4567');

-- Products
INSERT IGNORE INTO Products (name, price, stock_quantity) VALUES 
('Ribeye Steak', 25.99, 50),
('Ground Beef', 8.99, 100),
('Chicken Breast', 12.99, 75),
('Pork Chops', 15.49, 30);

-- Users
CALL RegisterUser('admin_user', 'admin@company.com', 'Admin@123', 'admin');
CALL RegisterUser('sales_person', 'sales@company.com', 'Sales@123', 'sales');
CALL RegisterUser('manager_user', 'manager@company.com', 'Manager@123', 'manager');

-- Orders
CALL AddNewOrder(1, 1, 2);
CALL AddNewOrder(2, 2, 3);

-- Payments
INSERT INTO Payments (order_id, amount, method) VALUES 
(1, 51.98, 'Card'),    
(2, 26.97, 'Cash');