import PlannerModel from '../wedding_planner/wedding_planner.model';

export function search(req, res) {
  let params = fuzzyObject(req.user.preferences);
  PlannerModel.find({
    params
  }).limit(5).exec((err, planners) => {
    console.log(planners);
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
