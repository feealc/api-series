var Series = require('./series.model.js')
var gen = require('../generic/generic.controller.js')
var validate = require('../validate/validate.controller.js')
//
var generic = require('../generic/generic.default.js')
var mR_S = generic.msgResponseSerie

//

const noShowFields = '-__v'

module.exports = {
	getAllSeries,
	getOneSerie,
	createSerie,
	updFullSerie,
	updParcialSerie,
	delSerie,
	delAllSeries
}

/**
 * @api {get} /series getAllSeries
 * @apiVersion 1.0.0
 * @apiName getAllSeries
 * @apiGroup Serie
 *
 * @apiUse SerieRetornoSucesso
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "_id": "XYZ",
 *       "nome": "Teste",
 *       "sinalizador": 1,
 *       "status": 1,
 *       "sp": null,
 *       "sm": "1997-12-19",
 *       "hia": null,
 *       "sf": null,
 *       "dia": 1,
 *       "eq_leg": null,
 *       "eq_leg_parc": null,
 *       "assistido": false,
 *       "situacao": null,
 *       "situacao_temp": null,
 *       "emissora": null,
 *       "dt_inicio": "2011-01-01",
 *       "dt_fim": "2017-01-01",
 *       "total_temp": 3,
 *       "total_ep": 15,
 *       "descN": ["Todos", "1 ao 5", "Nenhum"],
 *       "qtdeN": [10, 5, 0],
 *       "gravN": [0, 0, 0],
 *       "dt_criacao": "2017-01-01",
 *       "dt_ult_at": "2017-01-02",
 *       "dd_temp": null,
 *       "dd_ep": null,
 *       "dd_dia": nul,
 *       "imdb_id": "xpto"
 *     }]
 *
 */
function getAllSeries(req, res) {

	Series
		.find({}, noShowFields)
		.sort('nome')
		.then((series) => {
			return res
				.status(200)
				.json(series)
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(500)
				.json({message: mR_S.s500all})
		})

}

/**
 * @api {get} /series/:id getOneSerie
 * @apiVersion 1.0.0
 * @apiName getOneSerie
 * @apiGroup Serie
 *
 * @apiUse SerieRetornoSucesso
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "XYZ",
 *       "nome": "Teste",
 *       "sinalizador": 1,
 *       "status": 1,
 *       "sp": null,
 *       "sm": "1997-12-19",
 *       "hia": null,
 *       "sf": null,
 *       "dia": 1,
 *       "eq_leg": null,
 *       "eq_leg_parc": null,
 *       "assistido": false,
 *       "situacao": null,
 *       "situacao_temp": null,
 *       "emissora": null,
 *       "dt_inicio": "2011-01-01",
 *       "dt_fim": "2017-01-01",
 *       "total_temp": 3,
 *       "total_ep": 15,
 *       "descN": ["Todos", "1 ao 5", "Nenhum"],
 *       "qtdeN": [10, 5, 0],
 *       "gravN": [0, 0, 0],
 *       "dt_criacao": "2017-01-01",
 *       "dt_ult_at": "2017-01-02",
 *       "dd_temp": null,
 *       "dd_ep": null,
 *       "dd_dia": nul,
 *       "imdb_id": "xpto"
 *     }
 *
 * @apiUse SerieRetornoErro
 */
function getOneSerie(req, res) {

	const id = req.body.id || req.params.id

	Series
		.findById(id, noShowFields)
		.then((serie) => {
			if (serie) {
				return res
					.status(200)
					.json(serie)
			} else {
				return res
					.status(404)
					.json({message: mR_S.s404})
			}
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(500)
				.json({message: mR_S.s500one})
		})

}

/**
 * @api {post} /series createSerie
 * @apiVersion 1.0.0
 * @apiName createSerie
 * @apiGroup Serie
 *
 * @apiUse HeaderCType
 *
 * @apiUse SerieRequisicaoBody
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 * @apiSuccess {String} ID O ID da serie criada.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "SerieCriada",
 *       "_id": "XXX"
 *     }
 *
 * @apiUse SerieRetornoErroValidacao
 */
function createSerie(req, res) {
	
	validate.runExpressValidatorSerie(req)

 	req.getValidationResult().then(function(result) {

 		if (!result.isEmpty()) {

 			return res
 				.status(400)
 				.json(result.array())
 		
 		} else {

 			const serie = new Series(req.body)
 			
 			serie
				.save()
				.then((serie) => {
					return res
						.status(201)
						.json({message: mR_S.s201, '_id': serie._id})
				})
				.catch((err) => {
					if (err.code == 11000) { // duplicate key
						return res
							.status(400)
							.json({message: mR_S.s400duplikey})
					} else {
						console.log(err)
					}
					return res
						.status(500)
						.json({message: mR_S.s500create})
				})
 		}
	})

}

/**
 * @api {put} /series/:id updFullSerie
 * @apiVersion 1.0.0
 * @apiName updFullSerie
 * @apiGroup Serie
 *
 * @apiUse HeaderCType
 *
 * @apiParam {String} id ID da série.
 *
 * @apiUse SerieRequisicaoBody
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "SerieAlterada"
 *     }
 *
 * @apiUse SerieRetornoErroValidacao
 * @apiUse SerieRetornoErro
 * @apiUse IDInvalidoErro
 */
function updFullSerie(req, res) { // put

	validate.runExpressValidatorSerie(req)

 	req.getValidationResult().then(function(result) {

 		if (!result.isEmpty()) {
 			
 			return res
 				.status(400)
 				.json(result.array())

 		} else {

 			const id = req.body.id || req.params.id
 			const novaSerie = new Series(req.body)

			Series
				.findById(id)
				.then((serie) => {

					if (serie) {

						serie.nome = novaSerie.nome
						serie.sinalizador = novaSerie.sinalizador
						serie.status = novaSerie.status
						serie.sp = novaSerie.sp
						serie.sm = novaSerie.sm
						serie.hia = novaSerie.hia
						serie.sf = novaSerie.sf
						serie.dia = novaSerie.dia
						serie.eq_leg = novaSerie.eq_leg
						serie.eq_leg_parc = novaSerie.eq_leg_parc
						serie.assistido = novaSerie.assistido
						serie.situacao = novaSerie.situacao
						serie.situacao_temp = novaSerie.situacao_temp
						serie.emissora = novaSerie.emissora
						serie.dt_inicio = novaSerie.dt_inicio
						serie.dt_fim = novaSerie.dt_fim
						serie.total_temp = novaSerie.total_temp
						serie.total_ep = novaSerie.total_ep
						serie.descN = novaSerie.descN
						serie.qtdeN = novaSerie.qtdeN
						serie.gravN = novaSerie.gravN
						// serie.dt_criacao
						serie.dt_ult_at = gen.getCurrentDate()
						serie.dd_temp = novaSerie.dd_temp
						serie.dd_ep = novaSerie.dd_ep
						serie.dd_dia = novaSerie.dd_dia
						serie.imdb_id = novaSerie.imdb_id

						serie
							.save()
							.then(() => {
								return res
									.status(200)
									.json({message: mR_S.s200upd})
							})
							.catch((err) => {
								if (err.code == 11000) { // duplicate key
									return res
										.status(400)
										.json({message: mR_S.s400duplikey})
								} else {
									console.log(err)
								}
								return res
									.status(500)
									.json({message: mR_S.s500upd})
							})

					} else {
						return res
							.status(404)
							.json({message: mR_S.s404})
					}

				})
				.catch(() => {
					return res
						.status(500)
						.json({message: mR_S.s500})
				})		
 		}
	})

}

/**
 * @api {patch} /series/:id updParcialSerie
 * @apiVersion 1.0.0
 * @apiName updParcialSerie
 * @apiGroup Serie
 *
 * @apiUse HeaderCType
 *
 * @apiParam {String} id ID da série.
 *
 * @apiUse SerieRequisicaoBody
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "SerieAlterada"
 *     }
 *
 * @apiUse SerieRetornoErroValidacao
 * @apiUse SerieRetornoErro
 * @apiUse IDInvalidoErro
 */
function updParcialSerie(req, res) { // patch

	validate.runExpressValidatorSerie(req)

 	req.getValidationResult().then(function(result) {

 		if (!result.isEmpty()) {
 			
 			return res
 				.status(400)
 				.json(result.array())

 		} else {

 			const id = req.body.id || req.params.id

			Series
				.findById(id)
				.then((serie) => {

					if (serie) {

						serie.nome = req.body.nome || serie.nome
						serie.sinalizador = req.body.sinalizador // o sinalizador sempre estara no body
						serie.status = req.body.status // o status sempre estara no body
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
						serie.dia = req.body.dia // o dia sempre estara no body
						serie.eq_leg = req.body.eq_leg || serie.eq_leg
						serie.eq_leg_parc = req.body.eq_leg_parc || serie.eq_leg_parc
						serie.assistido = req.body.assistido || serie.assistido
						serie.situacao = req.body.situacao || serie.situacao
						// situacao_temp
						if (req.body.situacao_temp == 'null') {
							serie.situacao_temp = null
						} else {
							serie.situacao_temp = req.body.situacao_temp || serie.situacao_temp
						}
						serie.emissora = req.body.emissora || serie.emissora
						serie.dt_inicio = req.body.dt_inicio || serie.dt_inicio
						serie.dt_fim = req.body.dt_fim || serie.dt_fim
						serie.total_temp = req.body.total_temp // o total_temp sempre estara no body
						serie.total_ep = req.body.total_ep // o total_ep sempre estara no body
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
									.json({message: mR_S.s200upd})
							})
							.catch((err) => {
								if (err.code == 11000) { // duplicate key
									return res
										.status(400)
										.json({message: mR_S.s400duplikey})
								} else {
									console.log(err)
								}
								return res
									.status(500)
									.json({message: mR_S.s500upd})
							})

					} else {
						return res
							.status(404)
							.json({message: mR_S.s404})
					}

				})
				.catch(() => {
					return res
						.status(500)
						.json({message: mR_S.s500})
				})		
 		}
	})

}

/**
 * @api {delete} /series/:id delSerie
 * @apiVersion 1.0.0
 * @apiName delSerie
 * @apiGroup Serie
 *
 * @apiParam {String} id ID da série.
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "SerieApagada"
 *     }
 *
 * @apiUse SerieRetornoErro
 * @apiUse IDInvalidoErro
 */
function delSerie(req, res) {

	const id = req.body.id || req.params.id

	Series
		.findByIdAndRemove(id)
		.then((serie) => {
			if (serie) {
				return res
					.status(200)
					.json({message: mR_S.s200del})
			} else {
				return res
					.status(404)
					.json({message: mR_S.s404})
			}
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(500)
				.json({message: mR_S.s500del})
		})

}

/**
 * @api {get} /series/apagartudo delAllSeries
 * @apiName delAllSeries
 * @apiGroup Serie
 *
 * @apiUse HeaderCType
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "TodasSeriesApagadas"
 *     }
 */
function delAllSeries(req, res) {

	Series
		.remove({})
		.then(() => {
			console.log('\n===== TODOS AS SERIES FORAM APAGADAS!!!! =====\n')
			return res
				.status(200)
				.json({message: 'TodasSeriesApagadas'})
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(400)
				.json({message: 'ErroApagarTodasSeries'})
		})

}
