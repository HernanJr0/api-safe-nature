const Usuario = require('../models/UsuarioData')

module.exports = {
  async create(request, response) {
    const { nome, email, senha } = request.body
    const usuario = new Usuario({ nome, email, senha })
    await usuario.save()
    return response.json(usuario)
  },

  async read(request, response) {
    const usuarios = await Usuario.find()
    return response.json(usuarios)
  },

  async update(request, response) {
    const { nome, email, senha } = request.body
    const usuario = await Usuario.findByIdAndUpdate(
      request.params.id,
      { nome, email, senha },
      { new: true }
    )
    return response.json(usuario)
  },

  async delete(request, response) {
    await Usuario.findByIdAndDelete(request.params.id)
    return response.json({ message: 'Usuário deletado com sucesso' })
  },
}
