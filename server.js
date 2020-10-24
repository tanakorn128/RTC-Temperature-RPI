process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('mongoose')
var uri = 'mongodb://localhost/my-priject';
var db = mongoose.connect(uri);
var express = require('./config/express');
var app = express();
app.listen(3010);
module.exports = app;

console.log('server running..');