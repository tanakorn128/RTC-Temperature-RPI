var mongoose = require('./config/mongoose');
var express = require('./config/express');
var cors = require('cors');
var db = mongoose();
var app = express();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.listen(3010);
module.exports = app;

console.log('Server running at http://localhost:3010');