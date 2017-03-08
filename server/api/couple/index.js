'use strict';

var express = require('express');
var controller = require('./couple.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/results/:id', controller.results);
router.post('/', controller.create);

module.exports = router;
