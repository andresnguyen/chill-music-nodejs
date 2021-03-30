require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const path = require('path')

const route = require('./routes/index.route')
const db = require('./configs/db/index')

const app = express()

app.use(morgan('combined'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

db.connect()

route(app)


app.listen(process.env.PORT || 3001, () => console.log("server is running"))