var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var errorHandler = require('./handlers/errorHandlers');

var index = require('./routes/index');
var invite = require('./routes/invite');

var app = express();

require('dotenv').config()

const corsOptions = {
  origin: (app.get('env') === 'development'
    ? /https?:\/\/localhost:\d+/
    : [/\.netlify\.com$/, /https?:\/\/fcccolumbus\.com.+$/, /https?:\/\/shrouded-fortress-68159\.herokuapp.com\.com.+$/]),
  methods: ['GET', 'POST'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', index);
app.use('/invite', invite);


app.use(errorHandler.notFound)

// if (app.get('env') === 'development') {
//   // development error handler - prints stack trace
//   app.use(errorHandler.developmentErrors)
// }

// if (app.get('env') === 'development') {
//   // development error handler - prints stack trace
//   app.use(errorHandler.developmentErrors)
// }

if (process.NODE_ENIVORNMENT === 'development') {
  // development error handler - prints stack trace
  app.use(errorHandler.developmentErrors)
}


app.use(errorHandler.productionErrors)


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send(err);
// });

module.exports = app;
