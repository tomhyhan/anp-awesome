import express from 'express';
import 'express-async-errors';
import * as uomController from '../../controllers/master/uomController.js';
import { isAuth } from '../../middlewares/auth.js';

const router = express.Router();

router.get('/uomservices', isAuth,uomController.getAllUom2);
router.get('/pages', isAuth, uomController.getUomPartCount);
router.get('/filterPages', isAuth, uomController.getUomPartFilterCount);
router.get('/', isAuth, uomController.getAllUom);
router.get('/:id', isAuth, uomController.getById);
router.post('/', isAuth, uomController.postUom);
router.put('/:id', isAuth, uomController.updateUom);

export default router;
