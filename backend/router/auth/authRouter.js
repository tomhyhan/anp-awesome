import express from 'express';
import 'express-async-errors';
import * as authContoller from '../../controllers/auth/authController.js';
import { isAuth } from '../../middlewares/auth.js';

const router = express.Router();

router.post('/login', authContoller.login);
router.post('/logout', authContoller.logout);
router.post('/me', isAuth, authContoller.me);
export default router;
