import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  res.status(404).send('Not Found');
});

router.use((err, req, res, next) => {
  res.status(500).send('Try again later');
});

export default router;
