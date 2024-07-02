const express = require('express')
const app = express()
const clientRouter = require('./router/routerClients')

app.use(express.json())
app.use(clientRouter);

module.exports = app