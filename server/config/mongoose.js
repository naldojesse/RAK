var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

// mongoose.connect('mongodb://localhost/rak');
mongoose.connect('mongodb://127.0.0.1:27017');

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})