import weddingPlannerModel from './wedding_planner.model';

export function index(req, res) {
  console.log(weddingPlannerModel.find().exec((err, planners) => {
    if (err) {
      console.log("Error:", err);
      res.status(404).send('\nfailed to get couples\n\n');
    } else {
      res.status(200).json(planners);
    }
  }));
}

export function getWeddingPlanner(req, res) {
  weddingPlannerModel.findById({
    '_id': req.user._id
  }).select('-password').exec((err, planners) => {
    if (err) {
      res.status(404).json(err);
    } else {
      if(planners.status === 'deleted') {
        res.json('User is deleted');
      }
       else if(planners.status === 'banned') {
        res.json('User is banned');
      } else {
        res.status(200).json(planners);
      }

    }
  });
}

export function create(req, res) {
  var couple = new weddingPlannerModel(req.body);
  couple.save((err) => {
    if (err) res.status(404).json(err);
    else {
      res.status(200).send("/nAdded planner/n/n")
    }
  });
}

export function updateWeddingPlanner(req, res) {
  weddingPlannerModel.findOneAndUpdate({
    '_id': req.user._id
  }, req.body, {
    new: true
  })
  .then((planner) => {
    res.json(planner);
  }).catch((err) => {
    res.status(404).json(err);
  });
}

export function deleteWeddingPlanner(req, res) {
  weddingPlannerModel.findOneAndUpdate({
    '_id': req.user._id
  }, { $set: { 'status': 'deleted' }}, {
    new: true
  })
  .then((planner) => {
    res.json(planner);
  }).catch((err) => {
    res.status(404).json(err);
  });
}

export function logout(req, res) {
  req.logout();
  res.redirect('/');
}

export function isLoggedIn(req, res, next) {
  return next();
  // if(req.isAuthenticated()) {
  //   return next();
  // }
  // res.redirect('/');
}
