var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var studentsRouter = require('./routes/students');
var trainersRouter = require('./routes/trainers');
var coursesRouter = require('./routes/courses');
var assignmentsRouter = require('./routes/assignments');
var assignmentStudentRouter = require('./routes/assignmentStudent');
var profileRouter = require('./routes/profiles');
var statistics = require('./routes/statistics');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('./public'));

app.use('/', indexRouter);

app.use('/students', studentsRouter);
app.use('/trainers', trainersRouter);
app.use('/trainers/profile', profileRouter);
app.use('/courses', coursesRouter);
app.use('/assignments', assignmentsRouter);
app.use('/assignmentStudent', assignmentStudentRouter);
app.use('/statistics', statistics);

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
