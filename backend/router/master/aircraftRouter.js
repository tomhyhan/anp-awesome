import express from 'express';
import * as aircraftController from '../../controllers/aircraftController.js';

const router = express.Router();

router.get('/', aircraftController.getAllaircraft);
router.get('/:id', aircraftController.getById);
router.post('/', aircraftController.postaircraft);
router.put('/:id', aircraftController.updateaircraft);

export default router;
