import mysql from 'mysql2';
<<<<<<< HEAD

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
=======
import { config } from '../config.js';

const pool = mysql.createPool({
  host: config.mysqlDb.host,
  user: config.mysqlDb.user,
  password: config.mysqlDb.password,
  database: config.mysqlDb.database,
>>>>>>> newtam
});

export const db = pool.promise();
