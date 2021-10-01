import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

// routers
import aircraftRouter from './router/master/aircraftRouter.js';
import errorRouter from './router/error.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());

app.use('/master/spare_part', aircraftRouter);
app.use(errorRouter);

app.listen(8080, () => {
  console.log('Listening on http://localhost:8080 🤗');
});
