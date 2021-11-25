import express from 'express';
import 'express-async-errors';
import * as materialTaxController from '../../controllers/purchase/materialTaxController.js';
import { isAuth } from '../../middlewares/auth.js';

const router = express.Router();

// router.get('/all', materialTaxController.getDetail);
// isAuth
router.post('/', materialTaxController.postMaterialTax);

export default router;
