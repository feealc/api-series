var express = require('express')
var series = require('./series/series.controller.js')
var emissoras = require('./emissoras/emissoras.controller.js')
var equipelegendas = require('./equipelegendas/equipelegendas.controller.js')
var validate = require('./validate/validate.controller.js')

//

const router = express.Router()

router
	.route('/series')
	.get(series.getAllSeries)
	.post(series.createSerie)

router
	.route('/series/apagartudo')
	.get(series.delAllSeries)

router
	.route('/emissoras')
	.get(emissoras.getAllEmissoras)
	.post(emissoras.createEmissora)

router
	.route('/equipelegendas')
	.get(equipelegendas.getAllEquipeLegendas)
	.post(equipelegendas.createEquipeLegenda)

//

router.param('id', validate.id)

router
	.route('/series/:id')
	.get(series.getOneSerie)
	.delete(series.delSerie)
	.put(series.updSerie)

router
	.route('/emissoras/:id')
	.delete(emissoras.delEmissora)
	.put(emissoras.updEmissora)

router
	.route('/equipelegendas/:id')
	.delete(equipelegendas.delEquipeLegenda)
	.put(equipelegendas.updEquipeLegenda)

module.exports = router
