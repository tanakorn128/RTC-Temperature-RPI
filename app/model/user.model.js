var mongoose = require('mongoose');
var Schma = mongoose.Schema;

var UserSchma = new Schma({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String
});



mongoose.model('User', UserSchma);