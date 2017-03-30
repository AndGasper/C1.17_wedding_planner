'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.getWeddingPlanner = getWeddingPlanner;
exports.create = create;
exports.getPredetermined = getPredetermined;
exports.updateWeddingPlanner = updateWeddingPlanner;
exports.deleteWeddingPlanner = deleteWeddingPlanner;
exports.logout = logout;
exports.isLoggedIn = isLoggedIn;
exports.loggedIn = loggedIn;

var _wedding_planner = require('./wedding_planner.model');

var _wedding_planner2 = _interopRequireDefault(_wedding_planner);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index(req, res) {
  console.log(_wedding_planner2.default.find().exec(function (err, planners) {
    if (err) {
      console.log("Error:", err);
      res.status(404).send('\nfailed to get couples\n\n');
    } else {
      res.status(200).json(planners);
    }
  }));
}

function getWeddingPlanner(req, res) {
  console.log(req);
  _wedding_planner2.default.findById({
    '_id': req.user._id
  }).select('-password').exec(function (err, planners) {
    if (err) {
      res.status(404).json(err);
    } else {
      if (planners.status === 'deleted') {
        res.json('User is deleted');
      } else if (planners.status === 'banned') {
        res.json('User is banned');
      } else {
        res.status(200).json(planners);
      }
    }
  });
}

function create(req, res) {
  var couple = new _wedding_planner2.default(req.body);
  couple.save(function (err) {
    if (err) res.status(404).json(err);else {
      res.status(200).send("/nAdded planner/n/n");
    }
  });
}

function getPredetermined(req, res) {
  var ids = [_mongoose2.default.Types.ObjectId('58dd5669ed3ad0060a4055f2'), _mongoose2.default.Types.ObjectId('58dd567fed3ad0060a4055f3'), _mongoose2.default.Types.ObjectId('58dd568bed3ad0060a4055f4'), _mongoose2.default.Types.ObjectId('58dd5699ed3ad0060a4055f5'), _mongoose2.default.Types.ObjectId('58dd56a7ed3ad0060a4055f6'), _mongoose2.default.Types.ObjectId('58dd56b1ed3ad0060a4055f7')];
  _wedding_planner2.default.find({
    '_id': { $in: ids }
  }).catch(function (err) {
    res.status(404).json(err);
  }).then(function (planner) {
    console.log(planner);
    res.status(200).json(planner);
  });
}

function updateWeddingPlanner(req, res) {
  console.log(req.body);
  _wedding_planner2.default.findOneAndUpdate({
    '_id': req.user._id
  }, req.body, {
    new: true
  }).then(function (planner) {
    res.json(planner);
  }).catch(function (err) {
    res.status(404).json(err);
  });
}

function deleteWeddingPlanner(req, res) {
  _wedding_planner2.default.findOneAndUpdate({
    '_id': req.user._id
  }, { $set: { 'status': 'deleted' } }, {
    new: true
  }).then(function (planner) {
    res.json(planner);
  }).catch(function (err) {
    res.status(404).json(err);
  });
}

function logout(req, res) {
  req.logout();
  res.redirect('/');
}

function isLoggedIn(req, res, next) {
  if (req.user) {
    return next();
  }
  res.redirect('/');
}

function loggedIn(req, res, next) {
  if (req.user) {
    res.json(req.user);
  }
}