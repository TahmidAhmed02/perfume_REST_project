require('dotenv').config()

//express
const express = require('express')
const app = express()

//mongoose
const mongoose = require('mongoose')

//setting up mongoose
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//setting up express
app.use(express.json())

//Base express
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

const inventoryRouter = require ('./routes/inventory')
app.use('/inventory', inventoryRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));