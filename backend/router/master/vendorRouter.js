import express from 'express';
import * as vendorController from '../../controllers/master/vendorController.js';

const router = express.Router();

router.get('/', vendorController.getAllvendors);
router.get('/:id', vendorController.getById);
router.post('/', vendorController.postVendor);
router.put('/:id', vendorController.updateVendor);

export default router;
