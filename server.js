/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, brackets, $, window, CSSLint, Mustache */

'use strict'

var express = require('express');
var stylus = require('stylus');
var mongoose = require('mongoose'); 

var env = process.env.NODE_ENV || 'development';
var app = express();

var config = require('./server/config/config.js')[env]; 

require('./server/config/express')(app,config); 
require('./server/config/mongoose')(config); 
require('./server/config/passport')(); 
require('./server/config/routes')(app); 



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



var debug = require('debug')('ex-rushnwash');
app.set('port', process.env.PORT || 3000);
console.log('listing on port 3000'); 

var server = app.listen(config.port, function() {
  debug('Express server listening on port ' + server.address().port);
});


module.exports = app;