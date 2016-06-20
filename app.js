'use strict';
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));

app.use('/bower_components',express.static(path.join(__dirname, 'bower_components')));
app.use('/img/icons',express.static(path.join(__dirname, 'bower_components/material-design-icons/social/svg/design')));
app.use('/img/icons',express.static(path.join(__dirname, 'bower_components/material-design-icons/action/svg/design')));
app.use('/img/icons',express.static(path.join(__dirname, 'bower_components/material-design-icons/alert/svg/design')));
app.use('/img/icons',express.static(path.join(__dirname, 'bower_components/material-design-icons/av/svg/design')));
app.use('/img/icons',express.static(path.join(__dirname, 'bower_components/material-design-icons/editor/svg/design')));
app.use('/img/icons',express.static(path.join(__dirname, 'bower_components/material-design-icons/device/svg/design')));
app.use('/img/icons',express.static(path.join(__dirname, 'bower_components/material-design-icons/navigation/svg/design')));
app.use('/img/icons',express.static(path.join(__dirname, 'bower_components/material-design-icons/toggle/svg/design')));
app.use('/flags', express.static( path.join(__dirname, 'flags')));


var db  = require('./db')
app.use('/liga', db.Liga.router());
app.use('/clubs', db.Club.router());
app.use('/players', db.Player.router());
app.use('/news', db.News.router());
app.use('/spiele', db.Spiel.router());
app.use('/goals', db.Goal.router());
app.use('/spieltage', db.SpielTag.router());


//handle router message
app.use(function(mess, req,res, next){
    if( !mess ) next();
    console.log(mess)
    next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      if( err.status === 404 ){
        res.status( 200 );
        res.json({error : "page not found"});
      }

      if( err.status === 500 ){
        res.status( 200 );
        res.json({error : "internal error"});
      }

  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  /*
   *res.status(err.status || 500);
   */
  /*
   *res.json({ error : err.message });
   */
});


http.createServer(app).listen(3000);
