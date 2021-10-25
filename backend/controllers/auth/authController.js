import 'express-async-errors';
import * as authUtil from '../../utils/authUtils.js';
import * as userData from '../../data/master/employeeData.js';
import { config } from '../../config.js';

export async function login(req, res) {
  const { username, password } = req.body;

  const hash = await authUtil.hashPassword(password);
  const employee = await userData.getByEmployeeCode(username, hash);
  if (!employee) {
    return res.status(401).json({ message: 'Username or Password is Invalid' });
  }

  const isValidPassword = await authUtil.comeparePassword(
    password,
    employee.password
  );
  if (!isValidPassword) {
    return res.status(401).json({ message: 'Username or Password is Invalid' });
  }

  const token = await authUtil.createJWT(employee.emp_id);
  await authUtil.generateCookie(res, token);

  res.status(200).json({ token, username });
}

export async function me(req, res) {
  const employee = await userData.getAllById(req.emp_id);
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  }
  console.log('asdf');
  res.status(200).json({ token: req.token, username: employee.username });
}

export async function logout(req, res) {
  res.cookie('token', '');
  res.status(200).json({ message: 'User has been logged out' });
}
