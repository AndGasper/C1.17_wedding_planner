import coupleModel from './couple.model';

function respondWithResult(statusCode, res) {
  res.status(statusCode).json()
}

export function index(req, res) {
  console.log(coupleModel.find().exec((err, couples) => {
    if (err) {
      console.log("Error:", err);
      res.status(404).send('\nfailed to get couples\n\n');
    } else {
      res.status(200).json(couples);
    }
  }));
}

export function user(req, res) {
  coupleModel.findById({
    '_id': req.params.id
  }).exec((err, couples) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(couples);
    }
  });
}

export function create(req, res) {
  var couple = new coupleModel(req.body);
  couple.save((err) => {
    if (err) res.status(404).json(err);
    else {
      res.status(200).send("/nAdded user/n/n");
    }
  });
}

export function updateUser(req, res) { 
  coupleModel.findOneAndUpdate({
      '_id': req.params.id
    }, req.body, {
      returnNewDocument: true
    })
    .then((couple) => {
      res.json(couple);
    }).catch((err) => {
      res.status(404).json(err);
    });
}

export function deleteUser(req, res) { // TODO
    coupleModel.findOneAndUpdate({
      '_id': req.params.id
    }, { $set: { 'status': 'deleted' }}, {
      returnNewDocument: true
    })
    .then((couple) => {
      res.json(couple);
    }).catch((err) => {
      res.status(404).json(err);
    });
}