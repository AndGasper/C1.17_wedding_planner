'use strict';

import express from 'express';
import controller from './preferences.controller';

let router = express.Router();

router.get('/', controller.index);
router.get('/results/:id', controller.results);
router.post('/', controller.create);

module.exports = router;
