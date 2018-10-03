let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
// let CellarList = require('./routes/CellarList');


let app = express();

const cellar = require('./api/cellar');
const pipes = require('./api/pipes');
const users = require('./api/users');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/api/cellar', cellar);
app.use('/api/pipes', pipes);
app.use('/api/users', users);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('This is hitting the server but not finding the POST. Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
