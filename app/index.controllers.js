exports.render = function(req, res) {
    var isLoggedIn = false;
    if (typeof req.session.remember !== 'undefined') {
        isLoggedIn = req.session.remember;

    }

    res.render('index', {
        'title': 'hello world',
        'message': 'How are things'
    });
};