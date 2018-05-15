DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(250) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(16,2) NULL,
    stock_quantity INT(10) NULL,
    PRIMARY KEY (item_id)
);

CREATE TABLE departments(
    department_id INT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(50),
    over_head_costs DECIMAL(16,2),
    products_sales DECIMAL(16,2),
    total_profit DECIMAL(16,2),
    PRIMARY KEY (department_id)
);