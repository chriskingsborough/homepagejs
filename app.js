var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();

var booksRouter = require('./routes/books');
var photosRouter = require('./routes/photos');

var app = express();

app.use(cors());

app.use(express.static('public'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('build'));

// check security key
app.use('/', function(req, res, next) {
  // get the auth
  const apiKey = req.headers.authorization;
  if (req.method === 'GET' || apiKey === process.env.API_KEY) {
    next()
  } else {
    res.status(404).send({status: "Unauthorized"});
  }
})

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.use('/books', booksRouter);
app.use('/photos', photosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




const PORT = process.env.PORT || 5000;

app.listen(PORT);

module.exports = app;
