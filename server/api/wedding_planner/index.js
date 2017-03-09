'use strict';

import express from 'express';
let controller = require('./wedding_planner.controller');

let router = express.Router();

router.get('/', controller.index); 
router.get('/:id', controller.getWeddingPlanner);
router.post('/', controller.create);
router.put('/:id', controller.updateWeddingPlanner);

module.exports = router;
