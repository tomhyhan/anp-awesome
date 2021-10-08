import express from 'express';
import * as sparePartController from '../../controllers/master/sparePartController.js';

const router = express.Router();

router.get('/', sparePartController.getAllSpareParts);
router.get('/:id', sparePartController.getById);
router.post('/', sparePartController.postSparePart);
router.put('/:id', sparePartController.updateSparePart);

export default router;
