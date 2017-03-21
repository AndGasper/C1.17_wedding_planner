'use strict';

import mongoose from 'mongoose';

let weddingPlannerPreferencesSchema = new mongoose.Schema({
  size: String,
  cost: String,
  style: String
});

let weddingPlannerSchema = new mongoose.Schema({
  name: String,
  website: String,
  address: String,
  email: String,
  description: String,
  status: {
    type: String,
    default: 'active'
  },
  preferences: weddingPlannerPreferencesSchema,
  facebook: {},
  google: {}
});

export default mongoose.model('WeddingPlanner', weddingPlannerSchema);
