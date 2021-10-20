import mysql from 'mysql2';
import { config } from '../config.js';

const pool = mysql.createPool({
  host: config.mysqlDb.host,
  user: config.mysqlDb.user,
  password: config.mysqlDb.password,
  database: config.mysqlDb.database,
});

export const db = pool.promise();
