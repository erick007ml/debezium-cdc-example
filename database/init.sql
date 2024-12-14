CREATE DATABASE cdc_demo;
USE cdc_demo;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255),
    salary DECIMAL(10, 2),
    hire_date DATE
);

INSERT INTO employees (name, position, salary, hire_date) 
VALUES ('John Doe', 'Developer', 50000, '2022-01-15');
