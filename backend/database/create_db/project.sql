create database inventory_dev;
use inventory_dev;

CREATE TABLE project (
  project_master_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  project_name VARCHAR(255),     
  project_code VARCHAR(255),     
  remarks VARCHAR(255),             
  active_id INTEGER DEFAULT 1,      
  created_by VARCHAR(255),         
  created_date Date
);