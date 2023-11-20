const express = require('express');
const router = express.Router();
const ProductService = require('../services/productService');
const service = new ProductService();

router.get('/:id', async (req, res, next) =>{
    try {
        const products = await service.findOne(req.params.id);
        res.json(products);
    } catch (error) {
        next(error);// para ejecutar los middleware de errores
    }
    
});

router.get('/', async(req, res) =>{
    console.log(req.query.limits);
   const products = await service.find();
    res.json(products);
});


router.post('/', (req, res) =>{
    const body = req.body;
   console.log(req.body.name);
   res.json("asds");
    /*const newProduct = service.create(body);
     res.status(201).json({
        message : 'created',
        data : newProduct
     });*/
});

router.patch('/:id', async (req, res, next) =>{
    try {
        const id = req.params.id;
        const body = req.body;
        const product = await service.update(id, body);
        res.status(200).json({
            message : 'updated',
            data : product
        });
    } catch (error) {
        next(error);
    }
});



router.delete('/:id', (req, res) =>{
    const id = req.params.id;
    const idProduct = service.delete(id);
    res.json(idProduct);
});

module.exports = router;