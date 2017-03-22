'use strict';

import express from 'express';
import { index, user, updateUser, deleteUser, logout, isLoggedIn } from './user.controller'
import passport from 'passport';
//let controller = require('./couple.controller');

let app = express();

let router = express.Router();

// all routes are relative to /api/couple

router.get('/', index);
router.get('/:id', isLoggedIn, user); // get http://localhost:3000/api/couple
router.get('/logout', isLoggedIn, logout);
router.post('/', passport.authenticate('local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/login',
    failureFlash : true // allow flash messages
})); // post http://localhost:3000/api/couple
router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));
router.put('/:id', isLoggedIn, updateUser);
router.delete('/:id', deleteUser);
router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect : '/profile',
    failureRedirect : '/login'
}));
router.get('/login/facebook', passport.authenticate('facebook', { scope : 'email' }));


export default router;
