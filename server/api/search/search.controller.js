import PlannerModel from '../wedding_planner/wedding_planner.model';
import User from '../user/user.model';

export function search(req, res) {
  if(req.user) {
    userModel.findOneAndUpdate({
        '_id': req.user._id
      }, req.body.preferences, {
        new: true
      })
      .catch((err) => {
        res.status(404).json(err);
        console.log(err);
        return;
      });
  }
  let params = fuzzyObject(req.body.preferences);
  PlannerModel.find({
    params
  }).select('-password').exec((err, planners) => {
    if(err) {
      console.log('there was an error');
      res.send(err);
      return;
    }
    else if(planners.length == 0) {
      console.log('no planners');
      res.send('No planners match your search');
      return;
    }
    else {
      console.log(planners);
      res.status(200).json(planners);
    }
    console.log(planners);
    res.status(200).json(planners);
  })
}

function fuzzyObject(params) {
  return {
    cost: {$lte: params.cost,
      $gte: params.cost - 1},
    attendance: {
        $gte: params.cost - 1,
        $lte: params.cost + 1
    }
  }
}
