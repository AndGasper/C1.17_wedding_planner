'use strict';

var mongoose = require('mongoose');
var preferencesSchema = require('../preferences/preferences.model');

var coupleSchema = new mongoose.Schema({
  name: String,
  email: String,
  preferences: preferencesSchema,
  facebook: {},
  google: {}
});

module.exports = mongoose.model('Couple', coupleSchema);
