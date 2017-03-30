import userModel from './user.model';
import plannerModel from '../wedding_planner/wedding_planner.model';
let Promise = require('bluebird');

export function index(req, res) {
  console.log(userModel.find().exec((err, user) => {
    if (err) {
      console.log("Error:", err);
      res.status(404).send('\nfailed to get couples\n\n');
    } else {
      res.status(200).json(user);
    }
  }));
}

export function user(req, res) {
  userModel.findById({
    '_id': req.user._id
  }).select('-password').exec((err, user) => {
    if (err) {
      console.log(err);
      res.status(404).json(err);
    } else {
      res.status(200).json(user)
    }
  })
}

export function getUserPlanner(req, res) {
  plannerModel.findById({
    '_id': req.params.id
  }).select('-password').exec((err, planner) => {
    if (err) {
      console.log(err);
      res.status(404).json(err);
    } else {
      res.status(200).json(planner)
    }
  })
}

export function updateUser(req, res) {
  userModel.findOneAndUpdate({
      '_id': req.user._id
    }, req.body, {
      new: true
    })
    .then((user) => {
      res.json(user);
    }).catch((err) => {
      res.status(404).json(err);
    });
}

export function deleteUser(req, res) { // TODO
    userModel.findOneAndUpdate({
      '_id': req.user._id
    }, { $set: { 'status': 'deleted' }}, {
      new: true
    })
    .then((user) => {
      res.json(user);
    }).catch((err) => {
      res.status(404).json(err);
    });
}

export function addPlanner(req, res) {
    userModel.findOneAndUpdate({
      '_id': req.user._id
    }, { $push: { 'planners': req.body.planner }}, {
      new: true
    })
    .then((user) => {
      res.json(user);
    }).catch((err) => {
      res.status(404).json(err);
    });
}

export function logout(req, res) {
  console.log('logout called');
  req.logOut();
  req.session.destroy((err) => {
    if(err){
      console.log(err);
    }
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
}

export function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    console.log('is logged in');
    return next();
  }
  res.redirect('/');
}

export function loggedIn(req, res, next) {
  if(req.user) {
    res.json(req.user._id);
  }
}
