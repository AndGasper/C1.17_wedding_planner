import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import bluebird from 'bluebird';
import bodyParser from 'body-parser';

const app = express();

mongoose.Promise = bluebird;
mongoose.connect('localhost:27017/wedding-planner');

//var db = mongoose.Connection;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public'));
require('./routes').default(app);

app.listen(3000, function() {
  console.log('listening on port 3000')
});
