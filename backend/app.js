import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

// routers
import sparePartRouter from './router/master/sparePartRouter.js';
import errorRouter from './router/error.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());

app.use('/master/spare_part', sparePartRouter);
app.use(errorRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log('Listening on http://localhost:8080 🤗');
});
