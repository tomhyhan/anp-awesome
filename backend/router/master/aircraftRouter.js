import express from 'express';
<<<<<<< HEAD
import * as aircraftController from '../../controllers/aircraftController.js';

const router = express.Router();

router.get('/', aircraftController.getAllaircraft);
router.get('/:id', aircraftController.getById);
router.post('/', aircraftController.postaircraft);
router.put('/:id', aircraftController.updateaircraft);
=======
import * as aircraftController from '../../controllers/master/aircraftController.js';

const router = express.Router();

router.get('/', aircraftController.getAllAircraft);
router.get('/:id', aircraftController.getById);
router.post('/', aircraftController.postAircraft);
router.put('/:id', aircraftController.updateAircraft);
>>>>>>> newtam

export default router;
