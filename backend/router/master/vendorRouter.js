import express from 'express';
import * as vendorController from '../../controllers/master/vendorController.js';
import { isAuth } from '../../middlewares/auth.js';

const router = express.Router();


router.get('/all', vendorController.getAll);
router.get('/pages', isAuth, vendorController.getVendorCount);
router.get('/filterPages', isAuth, vendorController.getVendorFilterCount);
router.get('/:id', isAuth, vendorController.getById);
router.get('/', isAuth, vendorController.getAllVendors);
router.post('/', isAuth, vendorController.postVendor);
router.put('/:id', isAuth, vendorController.updateVendor);


export default router;
