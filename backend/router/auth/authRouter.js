import express from 'express';
import 'express-async-errors';
import * as authContoller from '../../controllers/auth/authController.js';

const router = express.Router();

router.post('/login', authContoller.login);
router.post('/logout', authContoller.logout);

export default router;
