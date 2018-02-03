// Catch Errors Handler
//
// With async/await, you need some way to catch errors
// Instead of using try{} catch(e) {} in each controller, we wrap the function in
// catchErrors(), catch any errors they throw, and pass it along to our express middleware with next()

  exports.catchErrors = (fn) => (req, res, next) => (
    fn(req, res, next).catch(next)
  )
  
  // not found error handler
  //
  // If we hit a route that is not found, we mark it as 404 and pass it along to the next
  // error handler to display
  
  exports.notFound = (req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  }
  
  // development error handler
  //
  // In development we show good error messages so if we hit a syntax error or any other
  // previously un-handled error, we can show good info on what happened
  
  exports.developmentErrors = (err, req, res, next) => {
    if (!err.errors) return next(err)
  
    // validation errors look like
    const errorKeys = Object.keys(err.errors)
  
    // eslint-disable-next-line no-console
    // errorKeys.forEach((key) => console.log(err.errors[key].message))
    res.status(500).send(err)
  }
  
  // production error handler
  
  exports.productionErrors = (err, req, res, next) => {
    res.status(err.status || 500)
        .send({
             message: err.message,
             error: {},
        })
  }