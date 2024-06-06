const Ocorrencias = require('../models/OcorrenciasData')

module.exports = {
  async create(request, response) {
    const { nome, endereco, descricao, data } = request.body
    const ocorrencias = new Ocorrencias({ nome, endereco, descricao, data })
    await ocorrencias.save()
    return response.json(ocorrencias)
  },

  async read(request, response) {
    const ocorrencias = await Ocorrencias.find()
    return response.json(ocorrencias)
  },

  async update(request, response) {
    const { nome, endereco, descricao, imagem } = request.body
    const ocorrencias = await Ocorrencias.findByIdAndUpdate(
      request.params.id,
      { nome, endereco, descricao, imagem },
      { new: true }
    )
    return response.json(ocorrencias)
  },

  async delete(request, response) {
    await Ocorrencias.findByIdAndDelete(request.params.id)
    return response.json({ message: 'Ocorrencia deletada com sucesso' })
  },
}
