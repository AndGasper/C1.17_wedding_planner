'use strict';

import express from 'express';
let controller = require('./couple.controller');

let router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.user);
router.post('/', controller.create);

module.exports = router;
