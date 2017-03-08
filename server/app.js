var express = require('express');
var app = express();
var mongoose = require('mongoose');

var routes = require('./routes');

mongoose.connect('localhost:27017/wedding-planner');

app.use('/', routes);

app.listen(3000, function() {
  console.log('listening on port 3000')
});
