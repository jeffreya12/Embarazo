var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var index = require('./routes/index');
var users = require('./routes/users');

//Rutas personalizadas
var album = require('./routes/album');
var bebe = require('./routes/bebe');
var cita = require('./routes/cita');
var consejo = require('./routes/consejo');
var diario = require('./routes/diario');
var doctor = require('./routes/doctor');
var evento = require('./routes/evento');
var recomendacion = require('./routes/recomendacion');
var ultrasonido = require('./routes/ultrasonido');
var usuario = require('./routes/usuario');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', index);
app.use('/users', users);

//Rutas personalizadas
app.use('/album', album);
app.use('/bebe', bebe);
app.use('/cita', cita);
app.use('/consejo', consejo);
app.use('/diario', diario);
app.use('/doctor', doctor);
app.use('/evento', evento);
app.use('/recomendacion', recomendacion);
app.use('/ultrasonido', ultrasonido);
app.use('/usuario', usuario);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

// load mongoose package
var mongoose = require('mongoose');
// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
mongoose.connect('mongodb://admin:1029612@ds161210.mlab.com:61210/embarazodb')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
