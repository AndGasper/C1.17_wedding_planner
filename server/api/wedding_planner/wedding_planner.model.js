'use strict';

import mongoose from 'mongoose';

var weddingPlannerPreferencesSchema = new mongoose.Schema({
  size: String,
  cost: String
});

var weddingPlannerSchema = new mongoose.Schema({
  name: String,
  website: String,
  email: String,
  description: String,
  preferences: weddingPlannerPreferencesSchema,
  facebook: {},
  google: {},
  role: String
});

export default mongoose.model('WeddingPlanner', weddingPlannerSchema);
