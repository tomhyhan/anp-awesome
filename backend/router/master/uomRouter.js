import express from 'express';
import * as uomController from '../../controllers/master/uomController.js';

const router = express.Router();

router.get('/pages', uomController.getUomCount);
router.get('/filterPages', uomController.getUomFilterCount);
router.get('/', uomController.getAllUom);
router.get('/:id', uomController.getById);
router.post('/', uomController.postUom);
router.put('/:id', uomController.updateUom);

export default router;
