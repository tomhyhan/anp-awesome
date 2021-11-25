import express from 'express';
import * as employeeController from '../../controllers/master/employeeController.js';
import { isAuth } from '../../middlewares/auth.js';
import { postTrim } from '../../middlewares/trim.js';

const router = express.Router();

router.get('/all', employeeController.getAll);
router.get('/pages', isAuth, employeeController.getEmployeeCount);
router.get('/filterPages', isAuth, employeeController.getEmployeeFilterCount);
router.get('/:id', isAuth, employeeController.getById);
router.get('/', isAuth, employeeController.getAllEmployees);
router.post('/', [isAuth,postTrim], employeeController.addEmployee);

router.put('/:id', isAuth, employeeController.updateEmployee);

export default router;
