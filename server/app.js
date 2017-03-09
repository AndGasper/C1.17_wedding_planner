import express from 'express';
import mongoose from 'mongoose';

let app = express();

import routes from './routes';

mongoose.connect('localhost:27017/wedding-planner');

app.use('/', routes);

app.listen(3000, function() {
  console.log('listening on port 3000')
});
