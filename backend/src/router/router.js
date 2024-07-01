const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers')


//rotas de clientes:

router.get('/clientes', controllers.getClients) //precisa de autenticação adm
router.get('/cliente/nome', controllers.getClientByName) //precisa de autenticação adm
router.post('/novoCliente', controllers.newClient) 
// router.put('/atualizarCliente/:id', controllers.putClients)
// router.delete('/deletarCliente/:id', controllers.deleteClients)

//rotas de funcionarios

// router.get('/funcionarios', controllers.getEmployees) //precisa de autenticação adm
// router.get('/funcionario/:id', controllers.getEmployeeById) //precisa de autenticação adm
// router.post('/novoFuncionario', controllers.postEmployees) 
// router.put('/atualizarFuncionario/:id', controllers.putEmployees)
// router.delete('/deletarFuncionario/:id', controllers.deleteEmployees)

module.exports = router;