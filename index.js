
const express = require('express')
const app = express()
require('dotenv').config()
const CategoryRouter = require('./Api/Category/Router')
const BrandRouter = require('./Api/Brand/Router')
const port = process.env.SERVER_PORT || 3200

app.use(express.json())
app.use('/api', CategoryRouter)
app.use('/api' ,BrandRouter)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})