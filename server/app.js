import express from 'express';
import mongoose from 'mongoose';

let app = express();

mongoose.connect('localhost:27017/wedding-planner');

require('./routes').default(app);

app.listen(3000, function() {
  console.log('listening on port 3000')
});
