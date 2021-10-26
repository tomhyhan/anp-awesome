import express from 'express';
import * as aircraftController from '../../controllers/master/aircraftController.js';

const router = express.Router();

router.get('/', aircraftController.getAllAircraft);
router.get('/:id', aircraftController.getById);
router.post('/', aircraftController.postAircraft);
router.put('/:id', aircraftController.updateAircraft);

export default router;
