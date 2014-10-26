
var express      = require('express'),
    sass         = require('node-sass'),
    logger       = require('morgan'),
    bodyParser   = require('body-parser'),
    passport     = require('passport'),
    cookieParser = require('cookie-parser'),
    session      = require('express-session'),
    path = require('path'),
    colors = require('colors');     


module.exports = function(app, config){


// view engine setup
app.set('views', path.join(config.rootPath, '/server/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({secret: 'multi vision unicors'}));
app.use(passport.initialize()); 
app.use(passport.session()); 

app.use(express.static(path.join(config.rootPath, 'public')));



};
