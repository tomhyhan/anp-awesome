import 'express-async-errors';
import * as authUtil from '../../utils/authUtils.js';
import * as userData from '../../data/master/employeeData.js';
import { config } from '../../config.js';

export async function login(req, res) {
  const { emp_code, password } = req.body;

  const employee = await userData.getByEmployeeCode(emp_code);
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

  res.status(200).json({ token, emp_code });
}

export async function me(req, res) {}

export async function logout(req, res) {}
