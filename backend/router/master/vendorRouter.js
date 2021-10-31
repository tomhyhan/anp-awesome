import express from 'express';
import * as vendorController from '../../controllers/master/vendorController.js';
import { isAuth } from '../../middlewares/auth.js';

const router = express.Router();

router.get('/pages', vendorController.getVendorCount);
router.get('/filterPages', vendorController.getVendorFilterCount);
router.get('/:id', vendorController.getById);
router.get('/', vendorController.getAllVendors);
router.post('/', vendorController.postVendor);
router.put('/:id', vendorController.updateVendor);

export default router;
