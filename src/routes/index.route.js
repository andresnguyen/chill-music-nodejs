const siteRoute = require('./site.route')
const userRoute = require('./user.route')

function route(app) {
    app.use('products', userRoute)
    app.use('/', siteRoute)
}

module.exports = route