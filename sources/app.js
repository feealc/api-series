var express = require('express')
var mongoose = require('mongoose')
var bluebird = require('bluebird')
var router = require('./router.js')
var bodyParser = require('body-parser')

//

const server = express()
const port = process.env.PORT || 4000

server
	.use(bodyParser.json())
	.use('/api', router)

mongoose.Promise = bluebird

const mongoconect = 'mongodb://seriesadm:brum@ds129018.mlab.com:29018/seriesdb'

mongoose.connect(mongoconect, err => {
  if (err) {
    return console.log('error on connect db')
  }
  server.listen(port, () => console.log(`localhost:${port}`))
})
