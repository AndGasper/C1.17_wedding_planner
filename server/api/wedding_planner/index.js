'use strict';

import express from 'express';
import { index, getWeddingPlanner, create, updateWeddingPlanner, deleteWeddingPlanner, isLoggedIn, logout } from './wedding_planner.controller';
import passport from 'passport';
let router = express.Router();

router.get('/', index);
router.get('/:id', isLoggedIn, getWeddingPlanner);
router.post('/', (req, res, next) => {
  passport.authenticate('planner-local-signup', (err, user, info) => {
      if (err) { return next(err) }
      if (!user) { return res.json( { message: info.message }) }
      res.json(user);
    })(req, res, next)
});
router.post('/login', (req, res, next) => {
    passport.authenticate('planner-local-login', function(err, user, info) {
      if (err) { return next(err) }
      if (!user) { return res.json( { message: info.message }) }
      res.json(user);
    })(req, res, next)
});
router.get('/logout', isLoggedIn, logout)
router.put('/:id', isLoggedIn, updateWeddingPlanner);
router.delete('/:id', deleteWeddingPlanner);

export default router;
