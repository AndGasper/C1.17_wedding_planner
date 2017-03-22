'use strict';

import express from 'express';
import { index, getWeddingPlanner, create, updateWeddingPlanner, deleteWeddingPlanner, isLoggedIn, logout } from './wedding_planner.controller';
import passport from 'passport';
let router = express.Router();

router.get('/', index);
router.get('/:id', isLoggedIn, getWeddingPlanner);
router.post('/', passport.authenticate('planner-local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/login',
    failureFlash : true // allow flash messages
})); // post http://localhost:3000/api/couple
router.post('/login', passport.authenticate('planner-local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));
router.get('/logout', isLoggedIn, logout)
router.put('/:id', isLoggedIn, updateWeddingPlanner);
router.delete('/:id', deleteWeddingPlanner);

export default router;
