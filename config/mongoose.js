var config = require('./config')
var mongoose = require('mongoose')
var uri = 'mongodb://localhost/my-project';
module.exports = function() {
    mongoose.set('debug', config.debug);
    var db = mongoose.connect(config.mongoUri);

    require('../app/model/user.model');

    return db;
};
console.log(config.mongoUri);