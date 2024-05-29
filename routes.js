const express = require('express')
const routes = express.Router()

const UsuarioController = require('./controllers/UsuarioController')

routes.post('/usuario', UsuarioController.create)
routes.get('/usuario', UsuarioController.read)
routes.put('/usuario/:id', UsuarioController.update)
routes.delete('/usuario/:id', UsuarioController.delete)

module.exports = routes