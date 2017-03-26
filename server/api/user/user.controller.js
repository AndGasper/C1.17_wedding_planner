import userModel from './user.model';
import plannerModel from '../wedding_planner/wedding_planner.model';

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
    '_id': req.params.id
  }).exec((err, user) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(user);
    }
  });
}

export function updateUser(req, res) {
  console.log(req.body);
  userModel.findOneAndUpdate({
      '_id': req.params.id
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
      '_id': req.params.id
    }, { $set: { 'status': 'deleted' }}, {
      new: true
    })
    .then((user) => {
      res.json(user);
    }).catch((err) => {
      res.status(404).json(err);
    });
}

export function searchResults(req, res) {
  plannerModel.find({
    'cost': req.params.cost
  }).exec((err, planner) => {
    if(err) {
      res.status(404).json(err);
    } else {
      let iterations = 1;
      while(planner.length > 5) {
        iterations++;
        planners = refineSearch(req, res, iterations);
      }
    }
  });
}

// refine the search for wedding planners to ensure we get anywhere from 4 to 6
function refineSearch(req, res, amount) {
  
}

export function logout(req, res) {
  req.logout();
  res.redirect('/');
}

export function isLoggedIn(req, res, next) {
  return next();
//   if(req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/');
}
