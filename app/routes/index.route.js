module.exports = (app) => {
    var index = require('../controllers/data.controller');
    //app.get('/', index.render).post('/addData', index.addData).get('/data', index.getData);
    app.post('/addData', index.addData);
    app.get('/getData', index.getData);
    app.get('/', index.render);
    app.get('/humidity', index.humidity);

}