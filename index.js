var mongoose = require('./config/mongoose');
var express = require('./config/express');
var cors = require('cors');
var db = mongoose();
var app = express();

app.use(function(res, req, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.headers('Access-Control-Allow-Headers', 'Content=Type');
    next();
});
app.use(cors());
app.listen(3010);
module.exports = app;

console.log('Server running at http://localhost:3010');