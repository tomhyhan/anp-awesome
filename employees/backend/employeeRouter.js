import express from 'express';
import * as employeeController from '../backend/employeeController.js';

const router = express.Router();

router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getById);
router.post('/', employeeController.postEmployee);
router.put('/:id', employeeController.updateEmployee);

export default router;