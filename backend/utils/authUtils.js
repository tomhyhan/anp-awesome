import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { config } from '../config.js';

export async function createJWT(emp_id) {
  return jwt.sign({ emp_id }, config.jwt.key, {
    expiresIn: config.jwt.expiresIn * 1000,
  });
}

export async function generateCookie(res, token) {
  const option = {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    maxAge: config.jwt.expiresIn,
  };
  res.cookie('token', token, option);
}

export async function hashPassword(password) {
  console.log(config.bcrypt.saltrounds);
  return await bcrypt.hash(password, config.bcrypt.saltrounds);
}

export async function comeparePassword(password, hash) {
  return await bcrypt.compare(password, hash);
}
