'use strict';

export default function(app) {
  app.use('/api/couple', require('./api/couple/index'));
  app.use('/api/wedding_planner', require('./api/wedding_planner/index'));
  //app.use('/api/preferences', require('./api/preferences/index'));
}
