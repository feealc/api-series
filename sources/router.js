var express = require('express')
var series = require('./series/series.controller.js')

//

const router = express.Router()

router
	.route('/series')
	.get(series.list)
	.post(series.create)

module.exports = router
