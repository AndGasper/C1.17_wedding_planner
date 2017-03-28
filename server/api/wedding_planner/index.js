'use strict';

import express from 'express';
import { index, getWeddingPlanner, create, updateWeddingPlanner, deleteWeddingPlanner, isLoggedIn, logout } from './wedding_planner.controller';
import passport from 'passport';
let router = express.Router();

router.get('/', index);
router.get('/me', isLoggedIn, getWeddingPlanner);
router.post('/', (req, res, next) => {
  passport.authenticate('planner-local-signup', (err, user, info) => {
      if (err) { return next(err) }
      if (!user) { return res.json('User not created') }
      res.json(user);
    })(req, res, next)
});
router.post('/login', (req, res, next) => {
    passport.authenticate('planner-local-login', function(err, user, info) {
      if (err) {
        console.log(err);
        return next(err)
      }
      if (!user) {
        return res.json('Credentials are wrong')
      }
      req.login(user, (error) => {
                    if (error) {
                      console.log(error);
                      return next(error);
                    }
                    return res.json(user);
                });
    })(req, res, next)
});
router.get('/logout', isLoggedIn, logout)
router.put('/me', isLoggedIn, updateWeddingPlanner);
router.delete('/', deleteWeddingPlanner);

export default router;
