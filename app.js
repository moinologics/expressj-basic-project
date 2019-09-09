var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();


//app config (don't change in genral)

const viewsBasePath = './views';
const routesBasePath = './routes';
const publicBasePath = './public'; //this was 'public'



//routes setup

/* register you routes here */
var indexRouter = require(`${routesBasePath}/index`);
var usersRouter = require(`${routesBasePath}/users`);

/* set path of registred routes */
app.use('/', indexRouter);
app.use('/users', usersRouter);




// view engine setup
app.set('views', path.join(__dirname, viewsBasePath));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, publicBasePath)));

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

module.exports = app;
