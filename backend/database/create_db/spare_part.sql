create database inventory_dev;
use inventory_dev;

CREATE TABLE spare_part (
  material_master_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  spare_part_code VARCHAR(255),     
  spare_part_desc VARCHAR(255),     
  hsn_code VARCHAR(255),            
  spare_part_group VARCHAR(255),   
  rate DOUBLE,                      
  uom INTEGER,                      
  remarks VARCHAR(255),             
  active_id INTEGER DEFAULT 1,      
  photo VARCHAR(255),               
  created_by VARCHAR(255),         
  created_date Date
);