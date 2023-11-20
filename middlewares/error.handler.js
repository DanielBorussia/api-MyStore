
function logErrors (error, req, res, next){
    console.log("logErrors");
    console.error(error);
    next(error);
}

function errorHandler (error, req, res, next){
    console.log("erroHandler");
    res.status(500).json({
      message : error.message,
      stack : error.stack,
    });
}

function boomErrorHandler (error, req, res, next){
  if (error.isBoom){
    const { output } = error;//informacion del error
    res.status(output.statusCode).json(output.payload);
  }{

    next(error);
  }
}


module.exports = {
    logErrors,
    errorHandler,
    boomErrorHandler
}