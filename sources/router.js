var express = require('express')
var series = require('./series/series.controller.js')
var validate = require('./validate/validate.controller.js')

//

const router = express.Router()

router
	.route('/series')
	.get(series.list)
	.post(series.create)

router.param('id', validate.id)

router
	.route('/series/:id')
	.get(series.getOne)
	.delete(series.del)
	.put(series.upd)

module.exports = router
