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
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(this.products);
            }, 5000);
        });
    }

    async findOne(id) {
        return this.products.find(product => product.id === id);
    }

    update(id, data) {
        const index = this.products.findIndex(product => product.id === id);
        if(index === -1) {
            throw new Error('product not found');
        }
        const product =this.products[index];
        this.products[index] = {
            ...product,
            ...data
        };
        return this.products[index];
    }

    delete(id) {
        const index = this.products.findIndex(product => product.id === id);
        if(index === -1) {
            throw new Error('product not found');
        }
        this.products.splice(index, 1);
        return { id };
    }

}

module.exports = ProductService;