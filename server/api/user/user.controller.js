import userModel from './user.model';

function respondWithResult(statusCode, res) {
  res.status(statusCode).json()
}

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

// export function create(req, res) {
//   var user = new userModel(req.body);
//   user.save((err) => {
//     if (err) res.status(404).json(err);
//     else {
//       res.status(200).send("/nAdded user/n/n");
//     }
//   });
// }

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
  userModel.findById({
    '_id': req.params.id
  }).exec((err, user) => {
    if (err) {
      res.status(404).json(err);
    } else {
      let preferences = user.preferences;
      console.log(preferences);
      res.json('recieved request for wedding planner results');
    }
  });
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
