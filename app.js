const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const cellar = require('./api/cellar');
const pipes = require('./api/pipes');
const users = require('./api/users');

// app.options('*', cors());

//! not sure if this is needed
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//! Think I eventually need to do a join(__dirname, 'directory_here') once I deploy
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(process.env.COOKIE_SECRET));
//! dont think I need these now that I've installed body-parser?
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cors({
  credentials: true
}));





// app.use('/auth', auth);
app.use('/api/cellar', cellar);
app.use('/api/pipes', pipes);
app.use('/api/users', users);





// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;