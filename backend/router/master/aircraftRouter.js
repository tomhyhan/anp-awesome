import express from 'express';
import * as aircraftController from '../../controllers/master/aircraftController.js';
import { isAuth } from '../../middlewares/auth.js';
import { postTrim } from '../../middlewares/trim.js';

const router = express.Router();

router.get('/pages',isAuth, aircraftController.getaircraftCount);
router.get('/filterPages',isAuth, aircraftController.getaircraftFilterCount);
router.get('/',isAuth, aircraftController.getAllAircraft);
router.get('/:id',isAuth, aircraftController.getById);
router.post('/',[isAuth,postTrim], aircraftController.postAircraft);
router.put('/:id',isAuth, aircraftController.updateAircraft);

export default router;
