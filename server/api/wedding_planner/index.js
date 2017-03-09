'use strict';

import express from 'express';
import controller from './wedding_planner.controller';

let router = express.Router();

// router.get('/', controller.index); will be used for admins
router.get('/:id', controller.results);
router.post('/', controller.create);

module.exports = router;
