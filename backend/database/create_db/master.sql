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

-- 11/03/2021 added created date and modified by
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
    created_by INT NOT NULL,
    created_date Date,
    modified_by INT,
    modified_date Date,
    password varchar(100) NOT NULL,
    username varchar(100) NOT NULL,
    PRIMARY KEY (emp_id)
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
  created_by INT NOT NULL,         
  created_date Date,
  modified_by INT,
  modified_date Date,
  KEY `frn_spare_part_uom_idx` (`frn_uom`),
  KEY `frn_spare_part_employee_idx` (`created_by`),
  KEY `frn_modified_part_employee_idx` (`modified_by`),
  CONSTRAINT `frn_modified_part_employee` FOREIGN KEY (`modified_by`) REFERENCES `employee` (`emp_id`),
  CONSTRAINT `frn_spare_part_employee` FOREIGN KEY (`created_by`) REFERENCES `employee` (`emp_id`),
  CONSTRAINT `frn_spare_part_uom` FOREIGN KEY (`frn_uom`) REFERENCES `uom` (`uom_id`)
);
  KEY `frn_spare_part_uom_idx` (`frn_uom`),
  CONSTRAINT `frn_spare_part_uom` FOREIGN KEY (`frn_uom`) REFERENCES `uom` (`uom_id`)

CREATE TABLE project (
  project_master_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  project_name VARCHAR(100) NOT NULL,     
  project_code VARCHAR(100) NOT NULL,     
  remarks VARCHAR(100),           
  active_id INTEGER DEFAULT 1,     
  created_by INT NOT NULL,
  star_date Date NOT NULL,
  end_date Date NOT NULL,        
  created_date Date NOT NULL,
  modified_by INT,
  last_modified_date Date,
  KEY `frn_project_employee_idx` (`created_by`),
  KEY `frn_modified_project_employee_idx` (`modified_by`),
  CONSTRAINT `frn_project_employee` FOREIGN KEY (`created_by`) REFERENCES `employee` (`emp_id`),
  CONSTRAINT `frn_modified_project_employee` FOREIGN KEY (`modified_by`) REFERENCES `employee` (`emp_id`)
);

CREATE TABLE vendor (
	vendor_id INT NOT NULL AUTO_INCREMENT,
    vendor_name VARCHAR(45) NOT NULL,
    vendor_code VARCHAR(45) NOT NULL,
    contact VARCHAR(45) NOT NULL,
    address VARCHAR(100) NOT NULL,
    remarks VARCHAR(100) NOT NULL,
    created_by INT NOT NULL,
    created_date Date NOT NULL,
    modified_by INT,
    last_modified_date Date,
    PRIMARY KEY (vendor_id),
    KEY `frn_vendor_employee_idx` (`created_by`),
    KEY `frn_modified_vendor_employee_idx` (`modified_by`),
    CONSTRAINT `frn_vendor_employee` FOREIGN KEY (`created_by`) REFERENCES `employee` (`emp_id`),
    CONSTRAINT `frn_modified_vendor_employee` FOREIGN KEY (`modified_by`) REFERENCES `employee` (`emp_id`)
);




CREATE TABLE aircraft (
  material_aircraft_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  aircraft_name VARCHAR(100),     
  remarks VARCHAR(100),                 
  created_by VARCHAR(100),            
  created_date Date
);

CREATE TABLE If NOT EXISTS `inventory_dev`.`detail` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `purchase_requisition_number` VARCHAR(45) NOT NULL,
  `vendor_id` INT NOT NULL,
  `payment_terms` INT NULL,
  `other_reference` VARCHAR(255) NULL,
  `transport_mode` VARCHAR(45) NULL,
  `purchase_order_validity` VARCHAR(45) NULL,
  `freight_terms` VARCHAR(45) NULL,
  `insurance` VARCHAR(45) NULL,
  `remarks` VARCHAR(255) NULL,
  `approval_level_1` INT NOT NULL,
  `approval_level_2` INT NOT NULL,
  `created_by` INT NOT NULL,
  `created_date` DATE NOT NULL,
  `modified_by` INT NULL,
  `modified_date` DATE NULL,
  PRIMARY KEY (`id`),
  INDEX `dt_vendor_id_idx` (`vendor_id` ASC) VISIBLE,
  INDEX `dt_approval_level_1_idx` (`approval_level_1` ASC) VISIBLE,
  INDEX `dt_approval_level_2_idx` (`approval_level_2` ASC) VISIBLE,
  CONSTRAINT `dt_vendor_id`
    FOREIGN KEY (`vendor_id`)
    REFERENCES `inventory_dev`.`vendor` (`vendor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `dt_approval_level_1`
    FOREIGN KEY (`approval_level_1`)
    REFERENCES `inventory_dev`.`employee` (`emp_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `dt_approval_level_2`
    FOREIGN KEY (`approval_level_2`)
    REFERENCES `inventory_dev`.`employee` (`emp_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `inventory_dev`.`fileattach` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ewaybill` BLOB NULL,
  `invoice` BLOB NULL,
  `other` BLOB NULL,
  `detail_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `frn_file_detail_idx_idx` (`detail_id` ASC) VISIBLE,
  CONSTRAINT `frn_file_detail_idx`
    FOREIGN KEY (`detail_id`)
    REFERENCES `inventory_dev`.`details` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `inventory_dev`.`material_tax` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sp_no` INT NOT NULL,
  `make` INT NOT NULL,
  `delivery_date` DATE NULL,
  `account_assignment` varchar(100) NOT NULL,
  `cost_center`varchar(100) NOT NULL,
  `plant`varchar(100) NOT NULL,
  `quantity` INT NOT NULL,
  `unit` INT NULL,
  `rate` INT NOT NULL,
  `dics` INT NULL,
  `disc_amount` INT NULL,
  `created_by` INT NOT NULL,
  `created_date` DATE NOT NULL,
  `modified_by` INT NULL,
  `modified_date` DATE NULL,
  PRIMARY KEY (`id`),
  INDEX `mt_sp_no_idx` (`id` ASC) VISIBLE,
  INDEX `mt_created_by_idx` (`created_by` ASC) VISIBLE,
  INDEX `mt_make_idx` (`make` ASC) VISIBLE,
  INDEX `mt_modified_by_idx` (`modified_by` ASC) VISIBLE,
  CONSTRAINT `mt_make`
    FOREIGN KEY (`make`)
    REFERENCES `inventory_dev`.`detail` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `mt_sp_no`
    FOREIGN KEY (`sp_no`)
    REFERENCES `inventory_dev`.`spare_part` (`material_master_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `mt_created_by`
    FOREIGN KEY (`created_by`)
    REFERENCES `inventory_dev`.`employee` (`emp_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `mt_modified_by`
    FOREIGN KEY (`modified_by`)
    REFERENCES `inventory_dev`.`employee` (`emp_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `mt_unit`
    FOREIGN KEY (`unit`)
    REFERENCES `inventory_dev`.`uom` (`uom_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

