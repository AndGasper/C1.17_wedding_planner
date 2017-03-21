'use strict';

import mongoose from 'mongoose';

let WeddingPlannerPreferencesSchema = new mongoose.Schema({
  size: String,
  cost: String,
  style: String
});

let WeddingPlannerSchema = new mongoose.Schema({
  name: String,
  website: String,
  address: String,
  email: String,
  description: String,
  status: {
    type: String,
    default: 'active'
  },
  preferences: [WeddingPlannerPreferencesSchema],
  facebook: {},
  google: {}
});

export default mongoose.model('WeddingPlanner', WeddingPlannerSchema);
