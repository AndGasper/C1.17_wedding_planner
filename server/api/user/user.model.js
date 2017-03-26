'use strict';

import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

const PreferencesSchema = new mongoose.Schema({
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

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  photo: String,
  password: {
    type: String,
    select: false
  },
  phoneNumber: String,
  preferences: [PreferencesSchema],
  admin: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    default: 'active'
  },
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
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
  if(this.password) {
    return bcrypt.compareSync(password, this.password);
  }
  return false;
};

export default mongoose.model('User', UserSchema);
