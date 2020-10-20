exports.render = function(req, res) {
    res.render('index', {
        'title': 'hello world',
        'message': 'How are things'
    });
};