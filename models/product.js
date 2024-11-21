const mongoose = require('mongoose')

//Mongo Database schema

//Subscriber Database
const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    subscribeToChannel: {
        type: String,
        required: true
    },

    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
}
)

//Product Database
const productSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0 // Price must be a positive number
    },
    ordered: {
        type: Boolean,
        default: false // Default to false if not specified
    }
});

 

//named Schema
module.exports = {
    Product: mongoose.model('Product', productSchema),
    Subscriber: mongoose.model('Subscriber', subscriberSchema),
};