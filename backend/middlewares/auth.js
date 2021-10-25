import jwt from 'jsonwebtoken';
import 'express-async-errors';
import { config } from '../config.js';
import * as employeeData from '../data/master/employeeData.js';

const auth_err = { message: 'Authentication invalid' };

// Later also need to validate the Header auth
export const isAuth = async (req, res, next) => {
  let token;
  const authHeader = req.get['Authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }

  if (!token) {
    token = req.cookies['token'];
  }

  if (!token) {
    res.status(401).json(auth_err);
  }

  jwt.verify(token, config.jwt.key, async (err, decode) => {
    if (err) {
      res.status(401).json(auth_err);
    }

    const employee = await employeeData.getAllById(decode.emp_id);
    if (!employee) {
      return res.status(401).json(auth_err);
    }
    req.emp_id = employee.emp_id;
    req.token = token;
    next();
  });
};
