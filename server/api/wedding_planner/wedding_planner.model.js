'use strict';

import mongoose from 'mongoose';

var weddingPlannerSchema = new mongoose.Schema({
  name: String,
  website: String,
  email: String,
  description: String,
  facebook: {},
  google: {},
  role: String
});

export default mongoose.model('WeddingPlanner', weddingPlannerSchema);
