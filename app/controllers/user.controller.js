var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
    var user = new User(req.body);
    console.log(res.json(user));
    user.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.list = function(req,res,next){
    User.findOne({}, function(err, users){
    if (err){
       return next(err);
    } else {
     res.json(users);
    }
    });
};

exports.login = function(req, res) {
    // console.log(req.body);
    //console.log('Email: ' + req.body.email);
    // console.log('Password: ' + req.body.password);

    if (req.body.remember === 'remember') {
        req.session.remember = true;
        req.session.email = req.body.email;
        //req.sessionOptions.maxAge = 60000;
        req.session.cookie.MaxAge = 60000;
    }



    res.render('index', {
        title: 'Logged in as  ' + req.body.email,
        isLoggedIn: true
    });
};

exports.logout = function(req, res) {
    req.session = null
    console.log('Email: ' + req.body.email);
    res.render('index', {
        title: 'see you again later',
        isLoggedIn: false
    });
};