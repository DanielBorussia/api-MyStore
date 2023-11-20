
function logErrors (error, req, res, next){
    console.log(error);
    next(error);
}


module.exports = {
    logErrors
}