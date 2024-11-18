const express = require('express')
const router = express.Router()
const {Inventory, Subscriber} = require('../models/subscribers')

// Getting all
router.get('/', async (req, res) => {
    try{
        const inventory = await Inventory.find()
        res.json(inventory)
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

// Getting one
router.get('/:id', getInventory, async(req, res) => {
    res.json(res.inventory)
})

// Creating one
router.post('/', async (req, res) => {
    const inventory = new Inventory({
        item: req.body.item,
        price: req.body.price
    })

    try{
        const newInventory = await inventory.save()
        res.status(201).json(newInventory)
    }catch(error) {
        res.status().json({message: error.message})
    }
})

// Updating one
router.patch('/:id', getInventory, async (req, res) => {
    if(req.body.item != null){
        res.inventory.item = req.body.item
    } 
    if(req.body.price != null){
        res.inventory.price = req.body.price 
    }
    if(req.body.ordered != null){
        res.inventory.ordered = req.body.ordered 
    }

    try{
        const updatedinventory = await res.inventory.save()
        res.json(updatedinventory)
    }catch(error){
        res.status(400).json({message:error.message})
    }  
})

// Deleting one
router.delete('/:id', getInventory, async (req, res) => {
    try {
        await res.inventory.deleteOne()
        res.json({ message: 'Deleted inventory' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Middleware
async function getInventory(req, res, next) {
    let inventory 
    try{
        inventory = await Inventory.findById(req.params.id)
        if(inventory == null) { 
            return res.status (404).json({message: 'Cannot find inventory'})
        }
    }catch(error){ 
        res.status(500).json({message:error.message})
    }
    res.inventory = inventory
    next()
}

module.exports = router
