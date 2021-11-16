import express from 'express';
import * as employeeController from '../../controllers/master/employeeController.js';
import { isAuth } from '../../middlewares/auth.js';
const router = express.Router();

router.get('/all', employeeController.getAll);
router.get('/pages', employeeController.getEmployeeCount);
router.get('/filterPages', employeeController.getEmployeeFilterCount);
router.get('/:id', employeeController.getById);
router.get('/', employeeController.getAllEmployees);
router.post('/', employeeController.addEmployee);
router.put('/:id', employeeController.updateEmployee);

export default router;
