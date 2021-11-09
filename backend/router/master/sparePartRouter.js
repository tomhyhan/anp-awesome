import express from 'express';
import 'express-async-errors';
import * as sparePartController from '../../controllers/master/sparePartController.js';
import { isAuth } from '../../middlewares/auth.js';
import { postTrim } from '../../middlewares/trim.js';


const router = express.Router();

router.get('/all', isAuth, sparePartController.getSpareParts);
router.get('/pages', isAuth, sparePartController.getSparePartCount);
router.get('/filterPages', isAuth, sparePartController.getSparePartFilterCount);
router.get('/:id', isAuth, sparePartController.getById);
router.get('/', isAuth, sparePartController.getAllSpareParts);
router.post('/', [isAuth,postTrim], sparePartController.postSparePart);
router.put('/:id', isAuth, sparePartController.updateSparePart);

export default router;
