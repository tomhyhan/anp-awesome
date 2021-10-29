import dotenv from 'dotenv';
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`${key} not Found!`);
  }
  return value;
}

export const config = {
  mysqlDb: {
    host: required('MYSQL_HOST'),
    user: required('MYSQL_USER'),
    password: required('MYSQL_PASSWORD', ''),
    database: required('MYSQL_DATABASE'),
    port: 3306
  },
  host: {
    port: required('PORT', 8080),
  },
  jwt: {
    key: required('JWT_KEY'),
    expiresIn: required('EXPIRESIN'),
  },
  bcrypt: {
    saltrounds: parseInt(required('SALTROUND')),
  },
};
