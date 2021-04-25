process.env.NODE_ENV === 'production' && require('dotenv').config()

import express from 'express'
import morgan from 'morgan'
import path from 'path'
import helmet from 'helmet'
const rfs = require('rotating-file-stream')

const app = express()
const port = process.env.PORT || 3001
const isProduction = process.env.NODE_ENV === 'production'
import route from './routes/index.route.js'
import connect from './configs/db/index.js'

const accessLogStream = rfs('access.log', {
    interval: '1d',
    path: path.join(__dirname, 'log'),
})

app.use(
    isProduction
        ? morgan('combined', { stream: accessLogStream })
        : morgan('dev')
)
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

connect()

route(app)

app.listen(port, () => console.log(`server is running at port ${port}`))

// unit test: don't need database
// integration test: need database
