
function logErrors (error, req, res, next){
    console.log(error);
    next(error);
}

function handleErrors (error, req, res, next){
  res.status(500).json({
    message : error.message,
    stack : error.stack,
  });
}


module.exports = {
    logErrors,
    handleErrors
}