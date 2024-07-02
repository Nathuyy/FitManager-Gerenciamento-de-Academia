const express = require('express')
const routerClient = express.Router()
const controllers = require('../controllers/controllersClient')

routerClient.get('/clientes', controllers.getClients) //precisa de autenticação adm
routerClient.get('/cliente/nome', controllers.getClientByName) //precisa de autenticação adm
routerClient.post('/novoCliente', controllers.newClient) 
routerClient.put('/atualizarCliente/:clientId', controllers.updateClient)
routerClient.delete('/deletarCliente/:clientId', controllers.deleteClient)


module.exports = routerClient