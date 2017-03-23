import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import bluebird from 'bluebird';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import secret from './config/express.config';
import passport from 'passport';
import session from 'express-session';

const app = express();

mongoose.Promise = bluebird;
mongoose.connect('localhost:27017/wedding-planner');

//var db = mongoose.Connection;

require('./config/passport.config')(passport);
app.use(logger('dev'));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(session({ secret: secret }));

// app.use(bodyParser.urlencoded({
//   extended: false
// }));

app.use(bodyParser.json({type: '*/*'}));

app.use(express.static('public'));
require('./routes').default(app);

app.listen(3000, function() {
  console.log('listening on port 3000')
});
