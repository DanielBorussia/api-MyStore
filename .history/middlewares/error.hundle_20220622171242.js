
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


module.exports = {
    logErrors,
    errorHandler
}