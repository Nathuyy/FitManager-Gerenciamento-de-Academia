const express = require('express')
const app = express()
const cors = require('cors');
const clientRouter = require('./router/routerClients')
const furncionariosRouter = require('./router/routerFurncionarios')

app.use(express.json())
app.use(cors()) 
app.use(clientRouter);
app.use(furncionariosRouter);

module.exports = app