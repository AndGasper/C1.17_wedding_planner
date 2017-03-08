'use strict';

var routes = function(app) {
  app.use('/api/couple', require('./api/couple'));
  app.use('/api/wedding_planner', require('./api/wedding_planner'));
  app.use('/api/preferences', require('./api/preferences'));
}

module.exports = routes;
