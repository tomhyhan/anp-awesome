

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';

// routers
import sparePartRouter from './backend/router/master/sparePartRouter.js';
import projectRouter from './backend/router/master/projectRouter.js';
import DashboardRouter from './backend/router/Dashboard/DashboardRouter.js';
import Pruchase_OrderRouter from './backend/router//Dashboard/Pruchase_OrderRouter.js';
import errorRouter from './backend/router/error.js';

const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());

app.use('/master/spare_part', sparePartRouter);
app.use('/master/project', projectRouter);
app.use(errorRouter);



app.use("/Dashboard",DashboardRouter)

app.use("/Purchase-order-create", Pruchase_OrderRouter)

  app.listen(8080, () => {
    console.log('Listening on http://localhost:8080 🤗');
  });
  