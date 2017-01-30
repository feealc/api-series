var EquipeLegendas = require('./equipelegendas.model.js')
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

	EquipeLegendas
		.find({}, noShowFields)
		.sort('nomeUP')
		.then(equipelegendas => res.json(equipelegendas))

}

function create(req, res) {
	
	var equipelegendas = new EquipeLegendas(req.body)

	equipelegendas.nomeUP = req.body.nome.toUpperCase()

	equipelegendas
		.save()
		.then(() => {
			return res
				.status(200)
				.json({message: 'equipe de legenda criada com sucesso'})
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(400)
				.json({message: 'falha ao criar nova equipe de legenda'})
		})
}

function upd(req, res) {

	const id = req.body.id || req.params.id

	EquipeLegendas
		.findById(id)
		.then(equipelegendas => {

			equipelegendas.nome = req.body.nome || equipelegendas.nome
			equipelegendas.nomeUP = req.body.nome.toUpperCase() || equipelegendas.nomeUP

			equipelegendas
				.save()
				.then(() => {
					return res
						.status(200)
						.json({message: 'equipe de legenda alterada com sucesso'})
				})
				.catch((err) => {
					console.log(err)
					return res
						.status(400)
						.json({message: 'erro ao alterar equipe de legenda'})
				})

		})
		.catch(() => {
			return res
				.status(400)
				.json({message: 'erro ao recuperar equipe de legenda'})
		})

}

function del(req, res) {

	const id = req.params.id

	const message = 'equipe de legenda apagada com sucesso'

	EquipeLegendas
		.findByIdAndRemove(id)
		.then(res.json({message}))
		.catch((err) => {
			console.log(err)
			return res
				.status(400)
				.json({message: 'erro ao apagar equipe de legenda'})
		})

}


