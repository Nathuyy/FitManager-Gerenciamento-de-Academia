const express = require('express')
const routerClient = express.Router()
const controllers = require('../controllers/controllersClient')
const presencaController = require('../controllers/controllerAttendence')

routerClient.get('/clientes', controllers.getClients) //precisa de autenticação adm
routerClient.post('/cliente/nome', controllers.getClientByName) //precisa de autenticação adm
routerClient.post('/novoCliente', controllers.newClient) 
routerClient.put('/atualizarCliente/:clientId', controllers.updateClient)
routerClient.delete('/deletarCliente/:clientId', controllers.deleteClient)

routerClient.post('/clientes/aulas/presenca', presencaController.registerAttendanceClient);
routerClient.post('/clientes/presencas', presencaController.getAttendanceClient);
module.exports = routerClient