'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var PreferencesSchema = new _mongoose2.default.Schema({
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

var UserSchema = new _mongoose2.default.Schema({
  name: String,
  email: String,
  photo: String,
  password: String,
  phoneNumber: String,
  preferences: [PreferencesSchema],
  planners: [String],
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
UserSchema.methods.generateHash = function (password) {
  return _bcryptNodejs2.default.hashSync(password, _bcryptNodejs2.default.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function (password) {
  if (!this.password) {
    return false;
  }
  return _bcryptNodejs2.default.compareSync(password, this.password);
};

exports.default = _mongoose2.default.model('User', UserSchema);