
const express = require('express')
const app = express()
require('dotenv').config()
const CategoryRouter = require('./Api/Category/Router')
const BrandRouter = require('./Api/Brand/Router')
const UserRouter = require('./Api/User/Router')
const UseProduct = require('./Api/Products/Router')
const port = process.env.SERVER_PORT || 3200

app.use(express.json())
app.use('/api', CategoryRouter)
app.use('/api' ,BrandRouter)
app.use('.api/',UserRouter)
app.use('./api',UseProduct)




/* app.use(express.json())

app.use('/api', require('./Api/Brand/Router'))
app.use('/api', require('./Api/Category/Router'))
app.use('/api', require('./Api/Products/Router'))
 */

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})