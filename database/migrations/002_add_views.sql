-- ============================================
-- VIEWS
-- ============================================

DROP VIEW IF EXISTS CustomerOrders;
DROP VIEW IF EXISTS ActiveUsers;

CREATE VIEW CustomerOrders AS
SELECT 
    c.customer_id,
    c.name,
    c.email,
    o.order_id,
    o.order_date,
    o.status
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id;

CREATE VIEW ActiveUsers AS
SELECT 
    user_id AS active_user_id,
    username,
    email,
    role,
    is_active,
    created_at,
    last_login,
    failed_login_attempts
FROM Users
WHERE is_active = TRUE;