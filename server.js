var colors = require('colors'); 

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus')

var routes = require('./routes/index');
var users = require('./routes/users');

var mongoose = require('mongoose'); 


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();





// view engine setup
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);





mongoose.connect('mongodb://localhost/mvision'); 
var db = mongoose.connection; 

db.on('error', console.log.bind(console, 'Connection error...'));
db.once('open', function callback() {
    console.log('mvision db opened');
});




app.get('/partials/:partialPath', function (req, res) {
    res.render('partials/' + req.params.partialPath);
});


app.get('*', function (req, res) {
    res.render('index');
});
 







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

console.log ( ' listing on port 3000'); 

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});





module.exports = app;
