'use strict';

import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

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

let preferencesSchema = new mongoose.Schema({
  cost: Number,
  //location: String,
  

});


// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('User', userSchema);
