const faker = require('faker');

class ProductService {
    products;
    constructor(){
        this.products = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let i = 0; i < limit; i++) {
            productos.push({
                name : faker.commerce.productName(),
                price : parseInt(faker.commerce.price(), 10),
            });
        }
    }

    find() {
        return this.products;
    }

    finOne() {

    }

    update() {

    }

    delete() {

    }

}

module.exports = ProductService;