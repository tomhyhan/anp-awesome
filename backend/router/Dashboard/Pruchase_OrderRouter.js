import express from 'express';
import * as PruchaseController from '../../controllers/PurchaseController.js';
const router = express.Router();


router.get('/',PruchaseController.show)

export default router;