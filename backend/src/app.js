const express = require('express')
const app = express()
const clientRouter = require('./router/routerClients')
const furncionariosRouter = require('./router/routerFurncionarios')

app.use(express.json())
app.use(clientRouter);
app.use(furncionariosRouter);

module.exports = app