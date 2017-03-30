'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WeddingPlannerPreferencesSchema = new _mongoose2.default.Schema({
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

var WeddingPlannerSchema = new _mongoose2.default.Schema({
  name: String,
  password: String,
  planner: {
    type: Boolean,
    default: true
  },
  website: String,
  address: String,
  email: String,
  image: String,
  description: String,
  status: {
    type: String,
    default: 'active'
  },
  preferences: [WeddingPlannerPreferencesSchema, { '_id': false }],
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
WeddingPlannerSchema.methods.generateHash = function (password) {
  return _bcryptNodejs2.default.hashSync(password, _bcryptNodejs2.default.genSaltSync(8), null);
};

// checking if password is valid
WeddingPlannerSchema.methods.validPassword = function (password) {
  if (!this.password) {
    return false;
  }
  return _bcryptNodejs2.default.compareSync(password, this.password);
};

exports.default = _mongoose2.default.model('WeddingPlanner', WeddingPlannerSchema);