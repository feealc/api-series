var Emissoras = require('./emissoras.model.js')
var gen = require('../generic/generic.controller.js')

//

const noShowFields = '-__v'

module.exports = {
	list,
	create,
	upd,
	del
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

function upd(req, res) {

	const id = req.body.id || req.params.id

	Emissoras
		.findById(id)
		.then(emissora => {

			emissora.nome = req.body.nome || emissora.nome

			emissora
				.save()
				.then(() => {
					return res
						.status(200)
						.json({message: 'emissora alterada com sucesso'})
				})
				.catch((err) => {
					console.log(err)
					return res
						.status(400)
						.json({message: 'erro ao alterar emissora'})
				})

		})
		.catch(() => {
			return res
				.status(400)
				.json({message: 'erro ao recuperar emissora'})
		})

}

function del(req, res) {

	const id = req.params.id

	const message = 'emissora apagada com sucesso'

	Emissoras
		.findByIdAndRemove(id)
		.then(res.json({message}))
		.catch((err) => {
			console.log(err)
			return res
				.status(400)
				.json({message: 'erro ao apagar emissora'})
		})

}
