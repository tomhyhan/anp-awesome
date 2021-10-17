import 'express-async-errors';
import * as authUtil from '../../utils/authUtils.js';

export async function login(res, req) {
  const { employee_code, password } = req.body;

  const employee = await userDatabase.getByEmployeeCode(employee_code);
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

export async function me(req, res) {}

export async function logout(req, res) {
    
}
