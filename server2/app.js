'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _express3 = require('./config/express.config');

var _express4 = _interopRequireDefault(_express3);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var hour = 3600000;
_mongoose2.default.Promise = _bluebird2.default;
_mongoose2.default.connect('localhost:27017/wedding-planner');

//var db = mongoose.Connection;

require('./config/passport.config')(_passport2.default);
app.use((0, _morgan2.default)('dev'));
app.use((0, _cookieParser2.default)());
app.use((0, _expressSession2.default)({ secret: _express4.default, cookie: { maxAge: 14 * 24 * hour } }));
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

app.use(_bodyParser2.default.json({ type: '*/*' }));

app.use(_express2.default.static('public'));
require('./routes').default(app);

app.listen(3000, function () {
  console.log('listening on port 3000');
});