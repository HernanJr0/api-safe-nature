const express = require('express')
const routes = express.Router()

const OcorrenciasController = require('./controllers/OcorrenciasController')

routes.post('/usuario', UsuarioController.create)
routes.get('/usuario', UsuarioController.read)
routes.put('/usuario/:id', UsuarioController.update)
routes.delete('/usuario/:id', UsuarioController.delete)


routes.post('/ocorrencias', OcorrenciasController.create)
routes.get('/ocorrencias', OcorrenciasController.read)
routes.put('/ocorrencias/:id', OcorrenciasController.update)
routes.delete('/ocorrencias/:id', OcorrenciasController.delete)

module.exports = routes
