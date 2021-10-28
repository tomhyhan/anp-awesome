import 'express-async-errors';
import * as authUtil from '../../utils/authUtils.js';
import * as userData from '../../data/master/employeeData.js';
import { config } from '../../config.js';

export async function login(req, res) {
  const { username, password } = req.body;

  const employees = await userData.getByEmployeeUsername(username);

  if (!employees) {
    return res.status(401).json({ message: 'Username or Password is Invalid' });
  }

  let isValidPassword;
  let currentEmployee;
  for (const employee of employees) {
    isValidPassword = await authUtil.comeparePassword(
      password,
      employee.password
    );
    if (isValidPassword) {
      currentEmployee = employee;
      break;
    }
  }

  if (!currentEmployee) {
    return res.status(401).json({ message: 'Username or Password is Invalid' });
  }

  const token = await authUtil.createJWT(currentEmployee.emp_id);
  await authUtil.generateCookie(res, token);

  res.status(200).json({ token, username, emp_id: currentEmployee.emp_id });
}

export async function me(req, res) {
  const employee = await userData.getAllById(req.emp_id);
  if (!req.token) {
    res.status(404).json({ message: 'Unauthorized' });
  }

  res.status(200).json({
    token: req.token,
    username: employee[0].username,
    emp_id: employee[0].emp_id,
  });
}

export async function logout(req, res) {
  res.cookie('token', '');
  res.status(200).json({ message: 'User has been logged out' });
}
