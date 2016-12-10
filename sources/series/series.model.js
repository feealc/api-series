var mongoose = require('mongoose')

//

const schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  sinalizador: {
    type: Number, // mudar
    required: true,
    min: 0,
    max: 2,
  },
  status: {
    type: Number, // mudar
    required: true,
    min: 0,
    max: 4,
  },
  sp: {
    type: Number, // mudar
  },
  sm: {
    type: Number, // mudar
  },
  hia: {
    type: Number, // mudar
  },
  sf: {
    type: Number, // mudar
  },
  dia: {
    type: Number, // mudar
    required: true,
    min: 0,
    max: 7,
  },
  eq_leg: {
    type: String,
  },
  eq_leg_parc: {
    type: String,
  },
  assistido: {
    type: Boolean,
    default: false,
  },
  situacao: {
    type: String,
  },
  situacao_temp: {
    type: Number,
  },
  emissora: {
    type: Number,
  },
  dt_inicio: {
    type: Number,
  },
  dt_fim: {
    type: Number,
  },
  total_temp: {
    type: Number,
    default: 0,
  },
  total_ep: {
    type: Number,
    default: 0,
  },
  descN: {
    type: String,
  },
  qtdeN: {
    type: String,
  },
  gravN: {
    type: String,
  },
  dt_criacao: {
    type: Number,
  },
  dt_ult_at: {
    type: Number,
  },
  dt_temp: {
    type: Number,
  },
  dd_ep: {
    type: String,
  },
  dd_dia: {
    type: String,
  },
  imdb_id: {
    type: String,
  }
})

module.exports = mongoose.model('series', schema)

