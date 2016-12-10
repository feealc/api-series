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

// server.listen(port, () => console.log(`localhost:${port}`))

// mongodb://username:password@host:port/database
// mongodb://herogod:esposito@ds027896.mlab.com:27896/beardb

// const mongoconect = 'localhost/seriesdb'
// const mongoconect = 'mongodb://feealc:*HerokuMongo13#DB?@ds129018.mlab.com:29018/seriesdb'
const mongoconect = 'mongodb://seriesadm:brum@ds129018.mlab.com:29018/seriesdb'

mongoose.connect(mongoconect, err => {
  if (err) {
    return console.log('error on connect db')
  }
  server.listen(port, () => console.log(`localhost:${port}`))
})
