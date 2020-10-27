var config = require('./config');
var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var session = require('express-session');
//const { mongoUri } = require('./env/production');
var RedisStore = require('connect-redis')(session);

module.exports = function() {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(compression);
    }


    /*app.use(cookieSession({
        name: 'session',
        keys: ['secret_key', 'secret_key2']
    }));*/

    //config.mongoUri
    //config.sessionSecret

    app.use(session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: true
    }));
    /* app.use(session({
         host: 'localhost',
         post: 6379,
         db: 2,
         pass: 'redis_password'
     }));
     secret: 'secret_key'*/

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());


    app.set('views', './app/views');
    app.set('view engine', 'jade');

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());


    require('../app/routes/index.routes')(app);
    require('../app/routes/use.route')(app);
    return app;
};