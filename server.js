require('dotenv').config()
//cors
const cors = require('cors');

//express
const express = require('express')
const app = express()

//mongoose
const mongoose = require('mongoose')

//setting up mongoose
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//setting up express
app.use(express.json())

//set up cors
app.use(cors());


//Base express
const productRouter = require ('./routes/product')
app.use('/product', productRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));