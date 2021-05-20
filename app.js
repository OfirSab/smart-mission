const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
// const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport')
const app = express();


// Passport config
require('dotenv/config')
require('./routes/passport-config')(passport)

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

// Express Session middleware
app.use(session({
  secret: 'secretcode',
  resave: false,
  saveUninitialized: true
}))
// Connect flash
app.use(flash())

mongoose.connect(process.env.DB_CONNECTION,config,()=>{console.log("connected to mongoose!");})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(cookieParser("secretcode"));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize())
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);


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
