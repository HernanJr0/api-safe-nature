const mongoose = require('mongoose');

const OcorrenciasSchema = new mongoose.Schema({
    nome: String,
    endereco: String,
    descricao: String,
    data: String,
});

module.exports = mongoose.model('Ocorrencias', OcorrenciasSchema);