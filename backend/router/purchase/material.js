import express from 'express';
import 'express-async-errors';
import * as materialController from '../../controllers/purchase/materialController';
import { isAuth } from '../../middlewares/auth.js';

const router = express.Router();
// isAuth
router.post('/', materialController.postMaterial);

export default router;
