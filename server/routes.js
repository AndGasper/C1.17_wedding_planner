'use strict';

import couple from './api/couple/index';
import planner from './api/wedding_planner/index';
//import pref from './api/preferences/index';

export default function(app) {
  app.use('/api/couple', couple);
  app.use('/api/wedding_planner', planner);
  //app.use('/api/preferences', pref);
}
