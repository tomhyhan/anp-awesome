import express from 'express';
import 'express-async-errors';
import * as sparePartController from '../../controllers/master/sparePartController.js';

const router = express.Router();

router.get('/pages', sparePartController.getSparePartCount);
router.get('/filterPages', sparePartController.getSparePartFilterCount);
router.get('/:id', sparePartController.getById);
router.get('/', sparePartController.getAllSpareParts);
router.post('/', sparePartController.postSparePart);
router.put('/:id', sparePartController.updateSparePart);

export default router;
