import express from 'express';
import * as DashboardController from '../../controllers/DashboardController.js';
const router = express.Router();


router.get('/',DashboardController.show)

export default router;