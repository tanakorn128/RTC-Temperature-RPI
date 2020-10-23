var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
module.exports = function() {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(compression);
    }
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

    app.use(cookieSession({
        name: 'session',
        keys: ['secret_key', 'secret_key2']
    }));

    require('../app/routes/index.routes')(app);
    require('../app/routes/use.route')(app);
    return app;
};