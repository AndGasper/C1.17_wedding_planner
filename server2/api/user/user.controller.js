'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.user = user;
exports.getUserPlanner = getUserPlanner;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.addPlanner = addPlanner;
exports.logout = logout;
exports.isLoggedIn = isLoggedIn;
exports.loggedIn = loggedIn;

var _user = require('./user.model');

var _user2 = _interopRequireDefault(_user);

var _wedding_planner = require('../wedding_planner/wedding_planner.model');

var _wedding_planner2 = _interopRequireDefault(_wedding_planner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Promise = require('bluebird');

function index(req, res) {
  console.log(_user2.default.find().exec(function (err, user) {
    if (err) {
      console.log("Error:", err);
      res.status(404).send('\nfailed to get couples\n\n');
    } else {
      res.status(200).json(user);
    }
  }));
}

function user(req, res) {
  _user2.default.findById({
    '_id': req.user._id
  }).select('-password').exec(function (err, user) {
    if (err) {
      console.log(err);
      res.status(404).json(err);
    } else {
      res.status(200).json(user);
    }
  });
}

function getUserPlanner(req, res) {
  _wedding_planner2.default.findById({
    '_id': req.params.id
  }).select('-password').exec(function (err, planner) {
    if (err) {
      console.log(err);
      res.status(404).json(err);
    } else {
      res.status(200).json(planner);
    }
  });
}

function updateUser(req, res) {
  _user2.default.findOneAndUpdate({
    '_id': req.user._id
  }, req.body, {
    new: true
  }).then(function (user) {
    res.json(user);
  }).catch(function (err) {
    res.status(404).json(err);
  });
}

function deleteUser(req, res) {
  // TODO
  _user2.default.findOneAndUpdate({
    '_id': req.user._id
  }, { $set: { 'status': 'deleted' } }, {
    new: true
  }).then(function (user) {
    res.json(user);
  }).catch(function (err) {
    res.status(404).json(err);
  });
}

function addPlanner(req, res) {
  _user2.default.findOneAndUpdate({
    '_id': req.user._id
  }, { $push: { 'planners': req.body.planner } }, {
    new: true
  }).then(function (user) {
    res.json(user);
  }).catch(function (err) {
    res.status(404).json(err);
  });
}

function logout(req, res) {
  console.log('logout called');
  req.logOut();
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    }
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('is logged in');
    return next();
  }
  res.redirect('/');
}

function loggedIn(req, res, next) {
  if (req.user) {
    res.json(req.user._id);
  }
}