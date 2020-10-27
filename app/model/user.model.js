var mongoose = require('mongoose');
var Schma = mongoose.Schema;

var UserSchma = new Schma({
    firstName: String,
    lastName: String,
    usename: { type: String, unique: true },
    email: { type: String, index: true },
    password: String
});

mongoose.model('User', UserSchma);