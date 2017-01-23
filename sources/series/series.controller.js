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

	console.log('=============================================================')
	console.log('func create')
	console.log('conteudo do body')
	console.log(req.body)
	console.log('=============================================================')

	const serie = new Series(req.body)

	serie
		.save()
		.then(() => {
			return res
				.status(200)
				.json({message: 'created'})
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(400)
				.json({message: 'error to create new serie'})
		})
}

function del(req, res) {

	console.log('iniciando func del')

	const id = req.params.id
	console.log(`parametro recebido id=${id}`)

	const message = 'Serie successfully deleted'

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
	const message = 'ok'

	Series
		.findById(id)
		.then(serie => {

			serie.nome = req.body.nome || serie.nome
			serie.sinalizador = req.body.sinalizador || serie.sinalizador
			serie.status = req.body.status || serie.status
			serie.sp = req.body.sp || serie.sp
			serie.sm = req.body.sm || serie.sm
			serie.hia = req.body.hia || serie.hia
			serie.sf = req.body.sf || serie.sf
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
						.json({message: 'erro ao atualizar serie'})
				})

		})
		.catch(() => {
			return res
				.status(400)
				.json({message: 'erro ao recuperar serie'})
		})

}





