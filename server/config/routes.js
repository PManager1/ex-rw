var auth = require('./auth'); 
var mongoose = require('mongoose');

module.exports = function (app) {

  app.get('/partials/*', function (req, res) {
    res.render('../../public/app/' + req.params[0]);
  });

  app.post('/login', auth.authenticate); 
  
  app.get('*', function (req, res) {
    res.render('index');
  });

};





 