CREATE TABLE employees (
	emp_id INT NOT NULL AUTO_INCREMENT,
    emp_name VARCHAR(30) NOT NULL,
    emp_code VARCHAR(30) NOT NULL,
    site_master_id VARCHAR(30) NOT NULL,
    contact VARCHAR(30) NOT NULL,
    address VARCHAR(30) NOT NULL,
    desination VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    remarks VARCHAR(30) NOT NULL,
    created_by VARCHAR(30) NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (emp_id)
);