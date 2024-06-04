const mongoose = require('mongoose');

const OcorrenciasSchema = new mongoose.Schema({
    nome: String,
    endereco: String,
    descricao: String,
    dataImagem: String
});

module.exports = mongoose.model('Ocorrencias', OcorrenciasSchema);