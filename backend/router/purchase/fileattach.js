import express from 'express';
import 'express-async-errors';
import * as fileController from '../../controllers/purchase/fileattachController.js';
import { isAuth } from '../../middlewares/auth.js';

const router = express.Router();
// isAuth
router.post('/', fileController.postfiles);

export default router;
