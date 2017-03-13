import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import bluebird from 'bluebird';

const app = express();

mongoose.Promise = bluebird;
mongoose.connect('localhost:27017/wedding-planner');

app.use(logger('dev'));
app.use(express.static('public'));
require('./routes').default(app);

app.listen(3000, function() {
  console.log('listening on port 3000')
});
