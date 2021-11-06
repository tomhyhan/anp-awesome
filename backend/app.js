import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import cookieParser from 'cookie-parser';

// routers
import sparePartRouter from './router/master/sparePartRouter.js';
import projectRouter from './router/master/projectRouter.js';
import uomRouter from './router/master/uomRouter.js';
import vendorRouter from './router/master/vendorRouter.js';
import employeeRouter from './router/master/employeeRouter.js';
import aircraftRouter from './router/master/aircraftRouter.js';
import errorRouter from './router/error.js';
import authRouter from './router/auth/authRouter.js';

import detailRouter from './router/purchase/detailRouter.js';


import fileRouter from './router/purchase/fileattach.js'

import { config } from './config.js';

const app = express();
app.use(cookieParser());

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

app.use('/master/spare_part', sparePartRouter);
app.use('/master/project', projectRouter);
app.use('/master/uom', uomRouter);
app.use('/master/vendor', vendorRouter);
app.use('/master/employee', employeeRouter);
app.use('/master/aircraft', aircraftRouter);

app.use('/purchase/detail', detailRouter);

app.use('/purchase/file', fileRouter);

app.use('/auth', authRouter);
app.use(errorRouter);

app.listen(config.host.port, () => {
  console.info(`Listening on http://localhost:${config.host.port} 🤗`);
});
