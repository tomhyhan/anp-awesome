create database inventory_dev;
use inventory_dev;

CREATE TABLE aircraft (
  material_aircraft_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  aircraft_name VARCHAR(255),     
  remarks VARCHAR(255),                 
  created_by VARCHAR(255),            
  created_date Date
);