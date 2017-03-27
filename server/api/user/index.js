'use strict';

import express from 'express';
import { index, user, updateUser, deleteUser, logout, isLoggedIn, searchResults } from './user.controller'
import passport from 'passport';
//let controller = require('./couple.controller');

let app = express();

let router = express.Router();

// all routes are relative to /api/couple

router.get('/', index);
router.get('/me', isLoggedIn, user);
router.get('/logout', isLoggedIn, logout);
router.post('/', (req, res, next) => {
  passport.authenticate('local-signup', (err, user) => {
      if (err) { return next(err) }
      if (!user) { return res.json('Credentials are wrong') }
      res.json(user);
    })(req, res, next);
});
router.post('/login', (req, res, next) => {
    passport.authenticate('local-login', function(err, user, info) {
      if (err) {
        console.log(err);
        return next(err)
      }
      if (!user) {
        console.log('credentials are wrong');
        return res.json('Credentials are wrong')
      }
      req.login(user, (error) => {
                    if (error) {
                      console.log(err);
                      return next(error);
                    }
                    console.log("Request Login supossedly successful.");
                    return res.send('Login successful');
                });
    })(req, res, next);
});
router.put('/me', isLoggedIn, updateUser);
router.delete('/', isLoggedIn, deleteUser);
router.get('/facebook/callback', (req, res, next) => {
  passport.authenticate('facebook', (err, user) => {
      if (err) { return next(err) }
      if (!user) { return res.json('Credentials are wrong') }
      res.json(user);
    })(req, res, next);
});
router.get('/login/facebook', passport.authenticate('facebook', { scope : 'email' }));

export default router;

/*.put('localhost:3000/api/user/me', () => {
    data: {
        "name"
    }:
})*/
