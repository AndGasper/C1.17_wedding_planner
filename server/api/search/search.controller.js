import PlannerModel from '../wedding_planner/wedding_planner.model';
import User from '../user/user.model';

export function search(req, res) {
  if(req.user) {
    userModel.findOneAndUpdate({
        '_id': req.user._id
      }, req.body.preferences, {
        new: true
      })
      .then((user) => {
        res.json(user);
      }).catch((err) => {
        res.status(404).json(err);
      });
  }
  let params = fuzzyObject(req.body.preferences);
  PlannerModel.find({
    params
  }).select('-password').exec((err, planners) => {
    if(err) res.send(err);
    if(!planners) res.send('No planners match your search');
    res.status(200).json(planners);
  })
}

function fuzzyObject(params) {
  return {
    $and: [
      {
        cost: {$lte: params.cost,
               $gte: params.cost - 1}
      },
      {
        attendance: {
          $gte: params.cost - 1,
          $lte: params.cost + 1
        }
      }
    ]
  }
}
