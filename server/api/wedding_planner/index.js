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
      if (!user) { return res.json('No user') }
      res.json(user);
    })(req, res, next)
});
router.post('/login', (req, res, next) => {
    passport.authenticate('planner-local-login', function(err, user, info) {
      if (err) { return next(err) }
      if (!user) { return res.json('No User') }
      res.json(user);
    })(req, res, next)
});
router.get('/logout', isLoggedIn, logout)
router.put('/', isLoggedIn, updateWeddingPlanner);
router.delete('/', deleteWeddingPlanner);

export default router;