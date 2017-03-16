'use strict';

import mongoose from 'mongoose';
import preferencesSchema from '../preferences/preferences.model';

let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: String,
  preferences: preferencesSchema,
  admin: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    default: 'active'
  },
  facebook: {},
  google: {}
});

export default mongoose.model('User', userSchema);
