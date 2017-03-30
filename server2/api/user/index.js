'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./user.controller');

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//let controller = require('./couple.controller');

var app = (0, _express2.default)();

var router = _express2.default.Router();

// all routes are relative to /api/couple

router.get('/', _user.index);
router.get('/status', _user.loggedIn);
router.get('/me/:id', _user.isLoggedIn, _user.getUserPlanner);
router.get('/me', _user.isLoggedIn, _user.user);
router.get('/logout', _user.isLoggedIn, _user.logout);
router.post('/', function (req, res, next) {
  _passport2.default.authenticate('local-signup', function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json('Credentials are wrong');
    }
    res.json(user);
  })(req, res, next);
});
router.post('/login', function (req, res, next) {
  _passport2.default.authenticate('local-login', function (err, user, info) {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!user) {
      console.log('credentials are wrong');
      return res.json('Credentials are wrong');
    }
    req.login(user, function (error) {
      if (error) {
        console.log(err);
        return next(error);
      }
      return res.json(user);
    });
  })(req, res, next);
});
router.put('/me/planner', _user.isLoggedIn, _user.addPlanner);
router.put('/me', _user.isLoggedIn, _user.updateUser);
router.delete('/', _user.isLoggedIn, _user.deleteUser);
router.get('/facebook/callback', function (req, res, next) {
  _passport2.default.authenticate('facebook', function (err, user) {
    if (err) {
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
router.get('/login/facebook', _passport2.default.authenticate('facebook', { scope: 'email' }));

exports.default = router;

/*.put('localhost:3000/api/user/me', () => {
    data: {
        "name"
    }:
})*/