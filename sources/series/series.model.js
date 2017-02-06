var mongoose = require('mongoose')
var gen = require('../generic/generic.controller.js')

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
    type: String,
    default: null,
  },
  sm: {
    type: String,
    default: null,
  },
  hia: {
    type: String,
    default: null,
  },
  sf: {
    type: String,
    default: null,
  },
  dia: {
    type: Number, // mudar
    required: true,
    min: 0,
    max: 7,
  },
  eq_leg: {
    type: String,
    default: null,
  },
  eq_leg_parc: {
    type: String,
    default: null,
  },
  assistido: {
    type: Boolean,
    default: false,
  },
  situacao: {
    type: String,
    default: null,
  },
  situacao_temp: {
    type: Number,
    default: null,
  },
  emissora: {
    type: String,
    default: null,
  },
  dt_inicio: {
    type: String,
    default: null,
  },
  dt_fim: {
    type: String,
    default: null,
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
    default: null,
  },
  qtdeN: {
    type: String,
    default: null,
  },
  gravN: {
    type: String,
    default: null,
  },
  dt_criacao: {
    type: String,
    default: gen.getCurrentDate,
  },
  dt_ult_at: {
    type: String,
    default: null,
  },
  dd_temp: {
    type: Number,
    default: null,
  },
  dd_ep: {
    type: String,
    default: null,
  },
  dd_dia: {
    type: String,
    default: null,
  },
  imdb_id: {
    type: String,
    default: null,
  }
})

module.exports = mongoose.model('series', schema)

