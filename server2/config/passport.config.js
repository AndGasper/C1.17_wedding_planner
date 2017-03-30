'use strict';

var _passportLocal = require('passport-local');

var _passportLocal2 = _interopRequireDefault(_passportLocal);

var _passportFacebook = require('passport-facebook');

var _passportFacebook2 = _interopRequireDefault(_passportFacebook);

var _user = require('../api/user/user.model');

var _user2 = _interopRequireDefault(_user);

var _wedding_planner = require('../api/wedding_planner/wedding_planner.model');

var _wedding_planner2 = _interopRequireDefault(_wedding_planner);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacebookStrategy = _passportFacebook2.default.Strategy;
var LocalStrategy = _passportLocal2.default.Strategy;

module.exports = function (passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        _user2.default.findById(id, function (err, user) {
            if (err) done(err);
            if (user) {
                done(null, user);
            } else {
                _wedding_planner2.default.findById(id, function (err, user) {
                    if (err) done(err);
                    done(null, user);
                });
            }
        });
    });

    // =========================================================================
    // FACEBOOK SIGNUP ============================================================
    // =========================================================================

    passport.use(new FacebookStrategy({

        //pulling in our app id and secret from auth.js file
        clientID: _auth2.default.facebookAuth.clientID,
        clientSecret: _auth2.default.facebookAuth.clientSecret,
        callbackURL: _auth2.default.facebookAuth.callbackURL,
        profileFields: ['id', 'displayName', 'photos', 'email'],
        passReqToCallback: true
    }, function (token, refreshToken, profile, done) {

        process.nextTick(function () {
            _user2.default.findOne({ 'facebook.id': profile.id }, function (err, user) {
                if (err) {
                    return done(err);
                }

                if (user) {
                    return done(null, user);
                } else {
                    var newUser = new _user2.default();
                    newUser.name = profile.displayName;
                    newUser.facebook.id = profile.id;
                    newUser.facebook.token = token;
                    newUser.facebook.name = profile.displayName;
                    newUser.facebook.email = profile.emails[0].value;
                    newUser.email = profile.emails[0].value;
                    newUser.facebook.photo = profile.photos[0].value;

                    newUser.save(function (err) {
                        if (err) throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }));

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function (req, email, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function () {

            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            _user2.default.findOne({ 'email': email }, function (err, user) {
                // if there are any errors, return the error
                if (err) {
                    return done(err);
                }

                // check to see if theres already a user with that email
                if (user) {
                    return done(null, false);
                } else {

                    // if there is no user with that email
                    // create the user
                    var newUser = new _user2.default();

                    // set the user's local credentials
                    newUser.email = email;
                    newUser.password = newUser.generateHash(password);
                    // save the user
                    newUser.save(function (err) {
                        if (err) {
                            throw err;
                        }
                        return done(null, newUser);
                    });
                }
            });
        });
    }));

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function (req, email, password, done) {
        // callback with email and password from our form
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        _user2.default.findOne({ 'email': email }, function (err, user) {
            // if there are any errors, return the error before anything else
            if (err) {
                return done(err);
            }

            // if no user is found, return the message
            if (!user) {
                return done(null, false); // req.flash is the way to set flashdata using connect-flash
            }
            // if the user is found but the password is wrong
            if (!user.validPassword(password)) {
                return done(null, false); // create the loginMessage and save it to session as flashdata
            }

            // all is well, return successful user
            return done(null, user);
        });
    }));

    passport.use('planner-local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function (req, email, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function () {

            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            _wedding_planner2.default.findOne({ 'email': email }, function (err, planner) {
                // if there are any errors, return the error
                if (err) {
                    return done(err);
                }

                // check to see if theres already a user with that email
                if (planner) {
                    return done(null, false);
                } else {

                    // if there is no user with that email
                    // create the user
                    var newPlanner = new _wedding_planner2.default();

                    // set the user's local credentials
                    newPlanner.email = email;
                    newPlanner.password = newPlanner.generateHash(password);

                    // save the user
                    newPlanner.save(function (err) {
                        if (err) {
                            throw err;
                        }
                        return done(null, newPlanner);
                    });
                }
            });
        });
    }));

    passport.use('planner-local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function (req, email, password, done) {
        // callback with email and password from our form
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        _wedding_planner2.default.findOne({ 'email': email }, function (err, user) {
            // if there are any errors, return the error before anything else
            if (err) {
                return done(err);
            }

            // if no user is found, return the message
            if (!user) {
                return done(null, false); // req.flash is the way to set flashdata using connect-flash
            }
            // if the user is found but the password is wrong
            if (!user.validPassword(password)) {
                return done(null, false); // create the loginMessage and save it to session as flashdata
            }
            // all is well, return successful user
            return done(null, user);
        });
    }));
};