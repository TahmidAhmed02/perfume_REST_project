const express = require('express')
const router = express.Router()
const {Product} = require('../models/product')

// Getting all
router.get('/', async (req, res) => {
    try{
        const product = await Product.find()
        res.json(product)
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

// Getting one
router.get('/:id', getProduct, async(req, res) => {
    res.json(res.product)
})

// Creating one
router.post('/', async (req, res) => {
    const product = new Product({
        item: req.body.item,
        price: req.body.price
    })

    try{
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    }catch(error) {
        res.status().json({message: error.message})
    }
})

// Updating one
router.patch('/:id', getProduct, async (req, res) => {
    if(req.body.item != null){
        res.product.item = req.body.item
    } 
    if(req.body.price != null){
        res.product.price = req.body.price 
    }
    if(req.body.ordered != null){
        res.product.ordered = req.body.ordered 
    }

    try{
        const updatedproduct = await res.product.save()
        res.json(updatedproduct)
    }catch(error){
        res.status(400).json({message:error.message})
    }  
})

router.patch('/:id/toggleOrder', async(req, res) => {
    try{
        const product = await Product.findById(req.params.id);
    
        if(!product){
            return res.status(404).json({ message: 'Product not found' });
        }
        product.ordered = !product.ordered;
        console.log(`Toggled ordered status for ${product.item}: ${product.ordered}`);

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    }catch(error) {
        res.status(400).json({message: error.message})
    }
})


// Deleting one
router.delete('/:id', getProduct, async (req, res) => {
    try {
        await res.product.deleteOne()
        res.json({ message: 'Deleted product' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Middleware
async function getProduct(req, res, next) {
    let product 
    try{
        product = await Product.findById(req.params.id)
        if(product == null) { 
            return res.status (404).json({message: 'Cannot find product'})
        }
    }catch(error){ 
        res.status(500).json({message:error.message})
    }
    res.product = product
    next()
}

module.exports = router
