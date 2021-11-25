import express from 'express';
import 'express-async-errors';
import * as sparePartController from '../../controllers/master/sparePartController.js';
import { isAuth } from '../../middlewares/auth.js';

import { sparePartControllers } from '../../controllers/master/sparePartController.js';

export default function (database) {
  const router = express.Router();

  router.get('/all', isAuth, sparePartController.getSpareParts);
  router.get('/pages', isAuth, sparePartController.getSparePartCount);
  router.get(
    '/filterPages',
    isAuth,
    sparePartController.getSparePartFilterCount
  );
  const sp = new sparePartControllers(database);
  router.get('/:id', isAuth, sparePartController.getById);
  router.get('/', isAuth, sp.getAllSpareParts);
  router.post('/', isAuth, sparePartController.postSparePart);
  router.put('/:id', isAuth, sparePartController.updateSparePart);

  return router;
}

// export default router;
