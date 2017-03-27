'use strict';

import user from './api/user/index';
import planner from './api/wedding_planner/index';
import search from './api/search/index';
//import pref from './api/preferences/index';

export default function(app) {
  app.use('/api/user', user);
  app.use('/api/search', search);
  app.use('/api/wedding_planner', planner);
<<<<<<< HEAD
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  });
=======
  //app.use('/api/preferences', pref);
>>>>>>> dc181400322b6c2b7c7aca26678c34d9d1e3d56e
}

