var express = require('./config/express');
var app = express();
app.listen(3010);
module.exports = app;

console.log('server running..');