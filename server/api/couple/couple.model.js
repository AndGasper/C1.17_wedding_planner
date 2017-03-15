'use strict';

import mongoose from 'mongoose';
import preferencesSchema from '../preferences/preferences.model';

let coupleSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: String,
  preferences: preferencesSchema,
  status: {
    type: String,
    default: 'active'
  },
  facebook: {},
  google: {}
});

export default mongoose.model('Couple', coupleSchema);
