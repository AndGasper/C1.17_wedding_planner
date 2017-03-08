'use strict';

var express = require('express');
var controller = require('./wedding_planner.controller');

var router = express.Router();

// router.get('/', controller.index); will be used for admins
router.get('/:id', controller.results);
router.post('/', controller.create);

module.exports = router;
