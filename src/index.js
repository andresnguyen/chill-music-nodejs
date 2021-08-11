process.env.NODE_ENV === 'production' || require('dotenv').config()

import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import passport from 'passport'
import session from 'express-session'

import route from './routes/index.route.js'
import connectDatabase from './configs/database.config.js'
import { handleError } from './middlewares/error.middleware'
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

app.use(
    session({
        secret: 's3cr3t',
        resave: true,
        saveUninitialized: true
    })
)
app.use(passport.initialize())
app.use(passport.session())

// logger
if (!isProduction) app.use(morgan('combined', { stream: accessLogStream }))
else app.use(morgan('dev'))

// connect to mongodb
connectDatabase()

// route
route(app)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.use(handleError)

app.listen(port, () => console.log(`Server is running at port ${port}`))

// unit test: don't need database
// integration test: need database
