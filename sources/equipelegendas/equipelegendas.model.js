var mongoose = require('mongoose')
var gen = require('../generic/generic.controller.js')

//

const schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  nomeUP: {
    type: String,
    default: null,
  },
  dt_criacao: {
    type: String,
    default: gen.getCurrentDate,
  }
})

module.exports = mongoose.model('equipelegendas', schema)

