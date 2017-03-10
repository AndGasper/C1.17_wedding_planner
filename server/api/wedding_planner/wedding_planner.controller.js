import weddingPlannerModel from './wedding_planner.model';

export function index(req, res) {
  res.send('\nrecieved get request on "/api/wedding_planner/"\n\n');
}

export function getWeddingPlanner(req, res) {
  res.send('\nWe recieved a get request on "/api/wedding_planner/:id" with id ' + req.params.id + "\n\n");
}

export function create(req, res) {
  res.send('\nrecieved post request on "/api/couple/" to create a new couple\n\n');
}

export function updateWeddingPlanner(req, res) {
  res.send('\nWe recieved your request to update user ' + req.params.id);
}