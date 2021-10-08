import express from 'express';
import * as employeeController from '../../controllers/master/employeeController.js';

const router = express.Router();

router.get('/', employeeController.getAllemployees);
router.get('/:id', employeeController.getById);
router.post('/', employeeController.postEmployee);
router.put('/:id', employeeController.updateEmployee);

export default router;
