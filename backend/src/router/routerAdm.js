const express = require('express')
const routerAdm = express.Router()
const admController = require('../controllers/controllersAdm')

routerAdm.post('/novoAdm', admController.newAdm);
routerAdm.get('/adms', admController.getAdms);



module.exports = routerAdm