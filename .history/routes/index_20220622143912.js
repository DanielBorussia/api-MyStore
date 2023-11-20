const productsRouter = require('./products');

function routerApi(router) {
    router.use('/products', productsRouter);
}

module.exports = routerApi;