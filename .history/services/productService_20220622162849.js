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
            this.products.push({
                id : faker.datatype.uuid(),
                name : faker.commerce.productName(),
                price : parseInt(faker.commerce.price(), 10),
            });
        }
    }

    create(data) {
        const newProduct = {
            id : faker.datatype.uuid(),
            ...data
        };
        this.products.push(newProduct);
        return newProduct;
    }

    find() {
        return this.products;
    }

    finOne(id) {
        return this.products.find(product => product.id === id);
    }

    update() {

    }

    delete() {

    }

}

module.exports = ProductService;