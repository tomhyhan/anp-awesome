import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import cookieParser from 'cookie-parser';

import * as employeeData from './data/master/employeeData.js';
import makeAuthRouter from './router/auth/authRouter.js';

export default function (employeeData) {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: 'http://localhost:4200',
      credentials: true,
      optionsSuccessStatus: 200,
    })
  );
  app.use(morgan('tiny'));
  app.use(helmet());

  app.use('/auth', makeAuthRouter(employeeData));
  return app;
}
