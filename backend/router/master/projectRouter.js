import express from 'express';
import * as projectController from '../../controllers/master/projectController.js';
import { isAuth } from '../../middlewares/auth.js';

const router = express.Router();

router.get('/pages',isAuth, projectController.getprojectCount);
router.get('/filterPages', isAuth, projectController.getprojectFilterCount);
router.get('/', isAuth, projectController.getAllproject);
router.get('/:id',isAuth, projectController.getById);
router.post('/',isAuth, projectController.postproject);
router.put('/:id',isAuth, projectController.updateproject);

export default router;
