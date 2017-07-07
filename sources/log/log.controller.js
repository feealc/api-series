var fs = require('fs')
var gen = require('../generic/generic.controller.js')

//

var homePath = "./log_files/"
var updDD_log = `${homePath}updDD/updDD_log.txt`
var updDD_debug = `${homePath}updDD/updDD_debug.txt`
var main_log = `${homePath}main/main_log.text`

var level = {
	log: false,
	debug: false
}

//

module.exports = {
	level,
	//
	log_main,
	//
	log_updDD,
	debug_updDD,
	dump_updDD,
	//
	limpar_logs
}

//

function log_main(value) {

	if (level.log) {

		var line2log = `${gen.getFormattedDate()} ${process.pid} ${value}` + '\n'

		fs.appendFile(main_log, line2log,  function(err) {

			if (err) {
				return console.error(err)
			}

			if (value == 'DOWN') {
				process.exit()
			}

		})

	}

}

function log_updDD(value) {

	if (level.log) {

		var line2log = `${gen.getFormattedDate()} ${value}` + '\n'

		fs.appendFile(updDD_log, line2log,  function(err) {

		   if (err) {
		      return console.error(err)
		   }
		  
		})

	}

}

function debug_updDD(value) {

	if (level.debug) {

		var line2log = `${gen.getFormattedDate()} ${value}` + '\n'

		fs.appendFile(updDD_debug, line2log,  function(err) {

		   if (err) {
		      return console.error(err)
		   }
		  
		})

	}

}

function dump_updDD(serie) {

	if (level.debug) {

		var line2log = `${gen.getFormattedDate()} DUMP` + '\n'
		line2log += `Nome: ${serie.nome}`
		line2log += `DD Temp: ${serie.dd_temp}`
		line2log += `DD Ep: ${serie.dd_ep}`
		line2log += `DD Dia: ${serie.dd_dia}`

		fs.appendFile(updDD_debug, line2log,  function(err) {

		   if (err) {
		      return console.error(err)
		   }
		  
		})

	}
	
}

function limpar_logs(req, res) {

	// main
	fs.writeFile(main_log, '')

	// dd log
	fs.writeFile(updDD_log, '')
	
	// // dd debug
	fs.writeFile(updDD_debug, '')

	//

	return res
		.status(200)
		.json({message: 'OK'})

}


