'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.use('/api/user', _index2.default);
  app.use('/api/search', _index6.default);
  app.use('/api/wedding_planner', _index4.default);

  app.use('*', function (req, res) {
    res.sendFile(_path2.default.resolve(__dirname, '..', 'public', 'index.html'));
  });
};

var _index = require('./api/user/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./api/wedding_planner/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./api/search/index');

var _index6 = _interopRequireDefault(_index5);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }