'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _wedding_planner = require('./wedding_planner.controller');

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _wedding_planner.index);
router.get('/status', _wedding_planner.loggedIn);
router.get('/me', _wedding_planner.isLoggedIn, _wedding_planner.getWeddingPlanner);
router.get('/predetermined', _wedding_planner.getPredetermined);
router.post('/', function (req, res, next) {
  _passport2.default.authenticate('planner-local-signup', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json('User not created');
    }
    res.json(user);
  })(req, res, next);
});
router.post('/login', function (req, res, next) {
  _passport2.default.authenticate('planner-local-login', function (err, user, info) {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!user) {
      return res.json('Credentials are wrong');
    }
    req.login(user, function (error) {
      if (error) {
        console.log(error);
        return next(error);
      }
      return res.json(user);
    });
  })(req, res, next);
});
router.get('/logout', _wedding_planner.isLoggedIn, _wedding_planner.logout);
router.put('/me', _wedding_planner.isLoggedIn, _wedding_planner.updateWeddingPlanner);
router.delete('/', _wedding_planner.deleteWeddingPlanner);

exports.default = router;