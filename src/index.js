process.env.NODE_ENV === 'production' || require('dotenv').config()

import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

import route from './routes/index.route.js'
import connectDatabase from './configs/db/index.js'
// import { handleErrorDev, handleErrorPro } from './middlewares/error.middleware'
import { accessLogStream } from './utils/helper'

const app = express()

// configure
const port = process.env.PORT || 3001
const isProduction = process.env.NODE_ENV === 'production'

// enabling CORS for all requests
app.use(cors())

// using bodyParser to parse JSON bodies into JS objects
app.use(express.json())

// adding Helmet to enhance your API's security
app.use(helmet())
app.use(express.urlencoded({ extended: true }))

// logger
if (!isProduction) app.use(morgan('combined', { stream: accessLogStream }))
else app.use(morgan('dev'))

// connect to mongodb
connectDatabase()

route(app)

// request to handle undefined or all other routes
app.get('*', (req, res) => {
    res.send('GET undefined routes BUT app work!')
})

// error handlers & middlewares
// if (isProduction) app.use(handleErrorPro)
// else app.use(handleErrorDev)

app.listen(port, () => console.log(`server is running at port ${port}`))

// unit test: don't need database
// integration test: need database
