import coupleModel from './couple.model';

export function index(req, res) {
  res.send('\nrecieved get request on "/api/couple/"\n\n');
}

export function user(req, res) {
  res.send('\nWe recieved a get request on "/api/couple/:id" with id ' + req.params.id + "\n\n");
}

export function create(req, res) {
  res.send('\nrecieved post request on "/api/couple/" to create a new couple\n\n');
}
