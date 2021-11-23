import express from 'express';
import 'express-async-errors';
import * as authContoller from '../../controllers/auth/authController.js';
import { isAuth } from '../../middlewares/auth.js';

// Refactoring
import { AuthControllers } from '../../controllers/auth/authController.js';

export default function (authData) {
  const router = express.Router();
  const authControllers = new AuthControllers(authData);

  router.post('/login', authControllers.login);
  router.post('/logout', authContoller.logout);
  router.post('/me', isAuth, authContoller.me);

  return router;
}

// export default router;
