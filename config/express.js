var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var cors = require('cors');
module.exports = () => {
    var app = express();
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(express.static('./public'));
    app.use(bodyParser.json());
    app.use(cors());
    app.set('views', './app/views');
    app.set('view engine', 'jade');
    require('../app/routes/index.route')(app);
    return app;
}