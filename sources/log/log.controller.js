var fs = require('fs')
var gen = require('../generic/generic.controller.js')

//

var homePath = "./log_files/"
var level = {
	log: true,
	debug: false
}

//

module.exports = {
	level,
	//
	log_updDD,
	debug_updDD
}

//

function log_updDD(value) {

	if (level.log) {

		var filePath = `${homePath}updDD/updDD.log`
		var line2log = `${gen.getFormattedDate()} ${value}` + '\n'

		fs.appendFile(filePath, line2log,  function(err) {
		// fs.writeFile(filePath, line2log,  function(err) {
		   if (err) {
		      return console.error(err)
		   }
		  
		})

	}

}

function debug_updDD(serie) {

	if (level.debug) {

		var filePath = `${homePath}updDD/updDD.debug`
		var line2log = `${gen.getFormattedDate()}` + '\n'
		line2log += `Nome: ${serie.nome}`
		line2log += `DD Temp: ${serie.dd_temp}`
		line2log += `DD Ep: ${serie.dd_ep}`
		line2log += `DD Dia: ${serie.dd_dia}`

		fs.appendFile(filePath, line2log,  function(err) {
		// fs.writeFile(filePath, line2log,  function(err) {
		   if (err) {
		      return console.error(err)
		   }
		  
		})

	}
	
}



// console.log("Going to write into existing file")

// var filePath = "./log/files/teste.txt"

// fs.appendFile(filePath, 'isles\n',  function(err) {
//    if (err) {
//       return console.error(err)
//    }
   
//    console.log("Data written successfully!")
//    // console.log("Let's read newly written data")
//    // fs.readFile(filePath, function (err, data) {
//    //    if (err) {
//    //       return console.error(err)
//    //    }
//    //    console.log("Asynchronous read: " + data.toString())
//    // })
// })



