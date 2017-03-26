import PlannerModel from '../wedding_planner/wedding_planner.model';

export function search(req, res) {
  PlannerModel.find({
    fuzzyObject(req.params)
  }).limit(5).exec((err, planners) => {

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
