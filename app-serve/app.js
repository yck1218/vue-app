var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// -----------------连接数据库-------------
var mongoose = require('mongoose')
// mongodb 是一个协议    localhost IP地址   qf2001数据库的名字  连接需要修改
mongoose.connect('mongodb://localhost/qf2001', {
  useNewUrlParser: true,    // 版本要求必须要写
  useUnifiedTopology: true   // 版本要求必须要写
})
var db = mongoose.connection
db.on('error', function(err) {
  console.log('数据库连接成败')
})
db.once('open', function() {
  console.log('数据库连接成功')
})
// ---------------------------------------
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',  require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/upload', require('./routes/upload'));
app.use('/descs', require('./routes/descs'));


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
