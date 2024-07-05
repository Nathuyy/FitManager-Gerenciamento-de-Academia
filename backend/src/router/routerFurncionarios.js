const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllersFuncionarios')


router.get('/funcionarios', controllers.getEmployees) //precisa de autenticação adm
router.get('/funcionario/nome', controllers.getEmployeeByName) //precisa de autenticação adm
router.post('/novoFuncionario', controllers.newEmployee)
router.delete('/deletarFuncionario/:idFunc', controllers.deleteEmployees)
router.put('/atualizarFuncionario/:idFunc', controllers.updateEmployees)




module.exports = router