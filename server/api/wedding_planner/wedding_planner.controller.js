import weddingPlannerModel from './wedding_planner.model';

function respondWithResult(statusCode, res) {
  res.status(statusCode).json()
}

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
    '_id': req.params.id
  }).exec((err, planners) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(planners);
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
      '_id': req.params.id
    }, req.body, {
      returnNewDocument: true
    })
    .then((planner) => {
      res.json(planner);
    }).catch((err) => {
      res.status(404).json(err);
    });
}

export function deleteWeddingPlanner(req, res) { // TODO
    weddingPlannerModel.findOneAndUpdate({
      '_id': req.params.id
    }, { $set: { 'status': 'deleted' }}, {
      returnNewDocument: true
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
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}
