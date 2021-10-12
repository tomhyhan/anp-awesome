create database inventory_dev;
use inventory_dev;

CREATE TABLE uom (
  uom_id int NOT NULL AUTO_INCREMENT,
  uom varchar(100) DEFAULT NULL,
  remarks varchar(250) DEFAULT NULL,
  created_by varchar(100) DEFAULT NULL,
  created_date  Date,
  PRIMARY KEY (uom_id)
);


CREATE TABLE spare_part (
  material_master_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  spare_part_code VARCHAR(100),     
  spare_part_desc VARCHAR(255),     
  hsn_code VARCHAR(100),            
  spare_part_group VARCHAR(100),   
  rate DOUBLE,                      
  frn_uom INTEGER,                      
  remarks VARCHAR(100),             
  active_id INTEGER DEFAULT 1,
  photo VARCHAR(255),               
  created_by VARCHAR(100),         
  created_date Date,
  KEY `frn_spare_part_uom_idx` (`frn_uom`),
  CONSTRAINT `frn_spare_part_uom` FOREIGN KEY (`frn_uom`) REFERENCES `uom` (`uom_id`)
);

CREATE TABLE project (
  project_master_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  project_name VARCHAR(100),     
  project_code VARCHAR(100),     
  remarks VARCHAR(100),             
  active_id INTEGER DEFAULT 1,      
  created_by VARCHAR(100), 
  end_date Date,        
  created_date Date
  
);



CREATE TABLE vendor (
	vendor_id INT NOT NULL AUTO_INCREMENT,
    vendor_name VARCHAR(45) NOT NULL,
    vendor_code VARCHAR(45) NOT NULL,
    contact VARCHAR(45) NOT NULL,
    address VARCHAR(100) NOT NULL,
    remarks VARCHAR(100) NOT NULL,
    created_by VARCHAR(100) NOT NULL,
    created_date Date,
    PRIMARY KEY (vendor_id)
);

CREATE TABLE employee (
  	emp_id INT NOT NULL AUTO_INCREMENT,
    emp_name VARCHAR(30) NOT NULL,
    emp_code VARCHAR(30) NOT NULL,
    site_master_id int NOT NULL,
    contact VARCHAR(30) NOT NULL,
    address VARCHAR(30) NOT NULL,
    designation VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    remarks VARCHAR(100) NOT NULL,
    created_by VARCHAR(30) NOT NULL,
    created_date Date,
    PRIMARY KEY (emp_id)
);


CREATE TABLE aircraft (
  material_aircraft_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  aircraft_name VARCHAR(100),     
  remarks VARCHAR(100),                 
  created_by VARCHAR(100),            
  created_date Date
);