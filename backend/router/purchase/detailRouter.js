import express from 'express';
import 'express-async-errors';
import * as detailController from '../../controllers/purchase/detailController.js';
import { isAuth } from '../../middlewares/auth.js';

const router = express.Router();

router.get('/all', detailController.getDetail);
// isAuth
router.post('/', detailController.postDetail);

export default router;
