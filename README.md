# ANP Team

# Project Goal
Developing an Inventory Management module for the aviation industry that can replace the legacy systems. The current Inventory Management environment spans many broad business disciplines that easily lead to silos and fragmented processes. Our clients want to create a simple solution that will bring stakeholders to one platform. By doing so, they are hoping to reduce aircraft utilization and inventory cost, increase customer support and staff productivity, and improve operational efficiencies.

# How to Install and run
* ```git clone https://github.com/tomhyhan/anp-awesome```
* ```cd ANP-AWESOME```

## Database
* ```cd backend/database/create_db```
* run master.sql and trigger.sql in local MySQL database
* put .env file in the backend 
```
MYSQL_HOST='<ip>'
MYSQL_USER='<user_name>'
MYSQL_PASSWORD='<passwrd>'
MYSQL_DATABASE='inventory_dev'
JWT_KEY='eyJhbGciOiJIUzI1NiIsG9lIiwiaWF0F2QT4fwpMeJf36POk6yJV_adQssw5c'
EXPIRESIN='3600'
SALTROUND='10'
```

## Backend
* ```cd backend```
* ```npm install```
* ```npm start```

## Frontend
* ```cd frontend/mro```
* ```npm install -g @angular/cli```
* ```npm install```
* ```ng add @angular/material```
* ```ng serve```

# About
We are Term 3 & Term 4 BCIT students studying in CIT Program. Our team is made up of 6 members:
* Tom(Hyungmin) Han
* Daphney Cheng
* Benny Jiang
* Ingrid Zeng
* Tama(Rahadian) Irman
* HoSung Yi
