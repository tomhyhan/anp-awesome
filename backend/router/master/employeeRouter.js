import express from 'express';
import * as employeeController from '../../controllers/master/employeeController.js';
import { isAuth } from '../../middlewares/auth.js';
const router = express.Router();

router.get('/all',isAuth, employeeController.getAll);
router.get('/pages', isAuth, employeeController.getEmployeeCount);
router.get('/filterPages', isAuth, employeeController.getEmployeeFilterCount);
router.get('/:id', isAuth, employeeController.getById);
router.get('/', isAuth, employeeController.getAllEmployees);
router.post('/',isAuth, employeeController.addEmployee);
router.put('/:id', isAuth, employeeController.updateEmployee);

export default router;
