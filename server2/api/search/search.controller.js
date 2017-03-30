'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = search;

var _wedding_planner = require('../wedding_planner/wedding_planner.model');

var _wedding_planner2 = _interopRequireDefault(_wedding_planner);

var _user = require('../user/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function search(req, res) {
  if (req.user) {
    _user2.default.findOneAndUpdate({
      '_id': req.user._id
    }, req.body, {
      new: true
    }).catch(function (err) {
      res.status(404).json(err);
      console.log(err);
      return;
    });
  }
  var preferences = {
    "cost": req.body.preferences.cost
  };
  _wedding_planner2.default.find({
    "preferences": preferences
  }).select('-password').exec(function (err, planners) {
    if (err) {
      console.log('there was an error');
      res.send(err);
      return;
    } else if (planners.length == 0) {
      console.log('no planners');
      res.send('No planners match your search');
      return;
    } else {
      console.log(planners);
      res.status(200).json(planners);
    }
    console.log(planners);
    res.status(200).json(planners);
  });
}

// function fuzzyObject(params) {
//   return {
//     cost: {$lte: params.cost + 1,
//       $gte: params.cost - 1}
//   }
// }