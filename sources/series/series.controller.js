var Series = require('./series.model.js')
var gen = require('../generic/generic.controller.js')

//

const noShowFields = '-__v'

module.exports = {
	list,
	getOne,
	create,
	del,
	upd,
}

function list(req, res) {

	// res.json({message:'oiiiiiii'})
	Series
		.find({}, noShowFields)
		.sort('nome')
		.then(series => res.json(series))

}

function getOne(req, res) {

	const id = req.body.id || req.params.id

	Series
		.findById(id, noShowFields)
		.then(serie => res.json(serie))

}

function create(req, res) {

	const serie = new Series(req.body)

	serie
		.save()
		.then(() => {
			return res
				.status(200)
				.json({message: 'serie criada com sucesso'})
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(400)
				.json({message: 'falha ao criar nova serie'})
		})
}

function del(req, res) {

	const id = req.params.id

	const message = 'Serie apagada com sucesso'

	Series
		.findByIdAndRemove(id)
		.then(res.json({message}))
		.catch((err) => {
			console.log(err)
			return res
				.status(400)
				.json({message: 'erro ao apagar serie'})
		})

}

function upd(req, res) {

	const id = req.body.id || req.params.id

	Series
		.findById(id)
		.then(serie => {

			serie.nome = req.body.nome || serie.nome
			serie.sinalizador = req.body.sinalizador || serie.sinalizador
			serie.status = req.body.status || serie.status
			// sp
			if (req.body.sp == 'null') {
				serie.sp = null
			} else {
				serie.sp = req.body.sp || serie.sp
			}
			// sm
			if (req.body.sm == 'null') {
				serie.sm = null
			} else {
				serie.sm = req.body.sm || serie.sm
			}
			// hia
			if (req.body.hia == 'null') {
				serie.hia = null
			} else {
				serie.hia = req.body.hia || serie.hia
			}
			// sf
			if (req.body.sf == 'null') {
				serie.sf = null
			} else {
				serie.sf = req.body.sf || serie.sf
			}
			serie.dia = req.body.dia || serie.dia
			serie.eq_leg = req.body.eq_leg || serie.eq_leg
			serie.eq_leg_parc = req.body.eq_leg_parc || serie.eq_leg_parc
			serie.assistido = req.body.assistido || serie.assistido
			serie.situacao = req.body.situacao || serie.situacao
			serie.situacao_temp = req.body.situacao_temp || serie.situacao_temp
			serie.emissora = req.body.emissora || serie.emissora
			serie.dt_inicio = req.body.dt_inicio || serie.dt_inicio
			serie.dt_fim = req.body.dt_fim || serie.dt_fim
			serie.total_temp = req.body.total_temp || serie.total_temp
			serie.total_ep = req.body.total_ep || serie.total_ep
			serie.descN = req.body.descN || serie.descN
			serie.qtdeN = req.body.qtdeN || serie.qtdeN
			serie.gravN = req.body.gravN || serie.gravN
			// serie.dt_criacao
			serie.dt_ult_at = gen.getCurrentDate()
			serie.dd_temp = req.body.dd_temp || serie.dd_temp
			serie.dd_ep = req.body.dd_ep || serie.dd_ep
			serie.dd_dia = req.body.dd_dia || serie.dd_dia
			serie.imdb_id = req.body.imdb_id || serie.imdb_id

			serie
				.save()
				.then(() => {
					return res
						.status(200)
						.json({message: 'serie alterada com sucesso'})
				})
				.catch((err) => {
					console.log(err)
					return res
						.status(400)
						.json({message: 'erro ao alterar serie'})
				})

		})
		.catch(() => {
			return res
				.status(400)
				.json({message: 'erro ao recuperar serie'})
		})

}





