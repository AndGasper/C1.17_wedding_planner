'use strict';

import mongoose from 'mongoose';
import preferencesSchema from '../preferences/preferences.model';

var coupleSchema = new mongoose.Schema({
  name: String,
  email: String,
  preferences: preferencesSchema,
  facebook: {},
  google: {}
});

export default mongoose.model('Couple', coupleSchema);
