'use strict';

import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

const PreferencesSchema = new mongoose.Schema({
  cost: Number,
  style: Number,
  flowers: Number,
  alcohol: Number
  //location: String
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  photo: String,
  password: String,
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
    email: String
  },
  google: {}
});

// generating a hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('User', UserSchema);
