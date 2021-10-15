import express from 'express';
import * as projectController from '../../controllers/master/projectController.js';

const router = express.Router();

router.get('/pages', projectController.getprojectCount);
router.get('/filterPages', projectController.getprojectFilterCount);
router.get('/', projectController.getAllproject);
router.get('/:id', projectController.getById);
router.post('/', projectController.postproject);
router.put('/:id', projectController.updateproject);

export default router;
