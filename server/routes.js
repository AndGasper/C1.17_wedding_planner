'use strict';

import user from './api/user/index';
import planner from './api/wedding_planner/index';
import search from './api/search/index';
//import pref from './api/preferences/index';

export default function(app) {
  app.use('/api/user', user);
  app.use('/api/search', search);
  app.use('/api/wedding_planner', planner);
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  });
}
