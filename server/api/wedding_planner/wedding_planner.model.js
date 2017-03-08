'use strict';

var mongoose = require('mongoose');

var weddingPlannerSchema = new mongoose.Schema({
  name: String,
  website: String,
  email: String,
  description: String,
  facebook: {},
  google: {},
  role: String
});

module.exports = mongoose.model('WeddingPlanner', weddingPlannerSchema);
