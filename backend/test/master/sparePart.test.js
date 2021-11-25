import request from 'supertest';
import MakeApp from '../../app';
import { jest } from '@jest/globals';
import makeSparePartRouter from '../../router/auth/authRouter.js';
jest.useFakeTimers();
import makeApp from '../../testapp.js';
import * as authUtil from '../../utils/authUtils.js';

// import jwt from 'jsonwebtoken';
// import * as userData from '../../data/master/employeeData.js';

// 1. create jest before all
// 2. make request to get jwt token
// 3. set token inside request <= super test doc
// 4. mock database | integration => use local database



const password = '$2b$10$JF8FjWXqdQEwvGmGD7KhTere4sm7sNkcxb5oyfFrM/aa4IxY77CDO';

const getByEmployeeUsername = jest.fn(() => [
  { username: 'testuser', password, emp_id: 1 },
]);
const app = makeApp({
  getByEmployeeUsername,
});

describe('/auth Testing', () => {
  test('should return token', async () => {
    const response = await request(app).post('/auth/login').send({
      username: 'testuser',
      password: 'testuser',
    });
    expect(getByEmployeeUsername).toHaveBeenCalledTimes(1);
    expect(response.statusCode).toBe(200);
  });
});
// /auth/login
// const mockEmployee = jest.fn();
// jest.mock('../../data/master/employeeData.js');

// const spy = jest
//   .spyOn(userData, 'getByEmployeeUsername', 'get')
//   .mockReturnValue('Mocked Employee');

// Object.defineProperty(userData, 'getByEmployeeUsername', {
//   value: jest.fn(),
//   configurable: true,
//   writable: true,
// });

// userData.getByEmployeeUsername = mockEmployee;
// const res = await request(app).post('/auth.login').send({
//   username: 'testuser',
//   password: 'testuser',
// });
// expect(res.statusCode).toBe(401);
// expect(spy).toHaveBeenCalledTimes(1);
