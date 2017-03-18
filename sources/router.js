var express = require('express')
var series = require('./series/series.controller.js')
var emissoras = require('./emissoras/emissoras.controller.js')
var equipelegendas = require('./equipelegendas/equipelegendas.controller.js')
var validate = require('./validate/validate.controller.js')

//

const router = express.Router()

router
	.route('/series')
	.get(series.list)
	.post(series.create)

router
	.route('/series/apagartudo')
	.get(series.delAll)

router
	.route('/emissoras')
	.get(emissoras.list)
	.post(emissoras.create)

router
	.route('/equipelegendas')
	.get(equipelegendas.list)
	.post(equipelegendas.create)

router.param('id', validate.id)

router
	.route('/series/:id')
	.get(series.getOne)
	.delete(series.del)
	.put(series.upd)

router
	.route('/emissoras/:id')
	.delete(emissoras.del)
	.put(emissoras.upd)

router
	.route('/equipelegendas/:id')
	.delete(equipelegendas.del)
	.put(equipelegendas.upd)

module.exports = router
