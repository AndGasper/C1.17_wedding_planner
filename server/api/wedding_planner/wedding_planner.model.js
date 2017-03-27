'use strict';

import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const WeddingPlannerPreferencesSchema = new mongoose.Schema({
  cost: Number,
  size: Number,
  food: Number,
  flowers: Number,
  music: Number,
  alcohol: Number,
  attendance: Number,
  photography: Number,
  time_of_year: Number,
  venue_reception: Number,
  venue_ceremony: Number,
  reception_vibe: Number
});

const WeddingPlannerSchema = new mongoose.Schema({
  name: String,
  password: {
    type: String,
    select: false
  },
  website: String,
  address: String,
  email: String,
  description: String,
  status: {
    type: String,
    default: 'active'
  },
  preferences: [WeddingPlannerPreferencesSchema],
  facebook: {
    id: String,
    name: String,
    token: String,
    email: String,
    photo: String
  },
  google: {}
});

// generating a hash
WeddingPlannerSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
WeddingPlannerSchema.methods.validPassword = function(password) {
  return mongoose.model('WeddingPlanner', WeddingPlannerSchema).findOne({'_id': this._id }).select('+password').exec((err, user) => {
    if(!user.password) {
      return false;
    }
    return bcrypt.compareSync(password, user.password);
  })
};

export default mongoose.model('WeddingPlanner', WeddingPlannerSchema);
