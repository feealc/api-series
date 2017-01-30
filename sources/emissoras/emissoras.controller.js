var Emissoras = require('./emissoras.model.js')
var gen = require('../generic/generic.controller.js')

//

const noShowFields = '-__v'

module.exports = {
	list,
	create
}

function list(req, res) {

	Emissoras
		.find({}, noShowFields)
		.sort('nome')
		.then(emissoras => res.json(emissoras))

}

function create(req, res) {
	
	const emissora = new Emissoras(req.body)

	emissora
		.save()
		.then(() => {
			return res
				.status(200)
				.json({message: 'emissora criada com sucesso'})
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(400)
				.json({message: 'falha ao criar nova emissora'})
		})
}




