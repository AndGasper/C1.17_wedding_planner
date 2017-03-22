'use strict';

import mongoose from 'mongoose';

const WeddingPlannerPreferencesSchema = new mongoose.Schema({
  size: String,
  cost: String,
  style: String
});

const WeddingPlannerSchema = new mongoose.Schema({
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

// generating a hash
WeddingPlannerSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
WeddingPlannerSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('WeddingPlanner', WeddingPlannerSchema);
