import express from 'express';
import * as sparePartController from '../../controllers/sparePartController.js';

const router = express.Router();

router.get('/', sparePartController.getAllSpareParts);
router.get('/:id');
router.post('/', sparePartController.postSparePart);
router.put('/:id');

export default router;
