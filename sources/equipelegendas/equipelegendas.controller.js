var EquipeLegendas = require('./equipelegendas.model.js')
var Series = require('../series/series.model.js')
var gen = require('../generic/generic.controller.js')
var validate = require('../validate/validate.controller.js')
//
var generic = require('../generic/generic.default.js')
var mR_EL = generic.msgResponseEquipeLegenda

//

const noShowFields = '-__v'

module.exports = {
	getAllEquipeLegendas,
	createEquipeLegenda,
	updEquipeLegenda,
	delEquipeLegenda
}

/**
 * @api {get} /equipelegendas getAllEquipeLegendas
 * @apiVersion 1.0.0
 * @apiName getAllEquipeLegendas
 * @apiGroup Equipe Legenda
 *
 * @apiUse EquipeLegendaRetornoSucesso
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "_id": "XYZ",
 *       "nome": "Teste",
 *       "dt_criacao": "2017-01-01"
 *     }]
 *
 */
function getAllEquipeLegendas(req, res) {

	EquipeLegendas
		.find({}, noShowFields)
		.sort('nomeUP')
		.then((equipelegendas) => {
			return res
				.status(200)
				.json(equipelegendas)
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(500)
				.json({message: mR_EL.el500all})
		})

}

/**
 * @api {post} /equipelegendas createEquipeLegenda
 * @apiVersion 1.0.0
 * @apiName createEquipeLegenda
 * @apiGroup Equipe Legenda
 *
 * @apiUse HeaderCType
 *
 * @apiUse EquipeLegendaRequisicaoBody
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 * @apiSuccess {String} ID O ID da emissora criada.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "EquipeLegendaCriada",
 *       "_id": "XXX"
 *     }
 *
 * @apiUse EquipeLegendaRetornoErroValidacao
 */
function createEquipeLegenda(req, res) {

	validate.runExpressValidatorEquipeLegenda(req)

 	req.getValidationResult().then(function(result) {

 		if (!result.isEmpty()) {

 			return res
 				.status(400)
 				.json(result.array())
 		
 		} else {

 			var equipelegenda = new EquipeLegendas(req.body)

			equipelegenda.nomeUP = req.body.nome.toUpperCase()
 			
 			equipelegenda
				.save()
				.then((equipelegenda) => {
					return res
						.status(201)
						.json({message: mR_EL.el201, '_id': equipelegenda._id})
				})
				.catch((err) => {
					if (err.code == 11000) { // duplicate key
						return res
							.status(400)
							.json({message: mR_EL.el400duplikey})
					} else {
						console.log(err)
					}
					return res
						.status(500)
						.json({message: mR_EL.el500create})
				})
 		}
	})
}

/**
 * @api {put} /equipelegendas/:id updEquipeLegenda
 * @apiVersion 1.0.0
 * @apiName updEquipeLegenda
 * @apiGroup Equipe Legenda
 *
 * @apiUse HeaderCType
 *
 * @apiParam {String} id ID da emissora.
 *
 * @apiUse EquipeLegendaRequisicaoBody
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "EquipeLegendaAlterada"
 *     }
 *
 * @apiUse EquipeLegendaRetornoErroValidacao
 * @apiUse EquipeLegendaRetornoErro
 * @apiUse IDInvalidoErro
 */
function updEquipeLegenda(req, res) {

	validate.runExpressValidatorEquipeLegenda(req)

 	req.getValidationResult().then(function(result) {

 		if (!result.isEmpty()) {
 			
 			return res
 				.status(400)
 				.json(result.array())

 		} else {

 			const id = req.body.id || req.params.id

			EquipeLegendas
				.findById(id)
				.then((equipelegenda) => {

					if (equipelegenda) {

						equipelegenda.nome = req.body.nome
						equipelegenda.nomeUP = req.body.nome.toUpperCase()

						equipelegenda
							.save()
							.then(() => {
								return res
									.status(200)
									.json({message: mR_EL.el200upd})
							})
							.catch((err) => {
								if (err.code == 11000) { // duplicate key
									return res
										.status(400)
										.json({message: mR_EL.el400duplikey})
								} else {
									console.log(err)
								}
								console.log(err)
								return res
									.status(500)
									.json({message: mR_EL.el500upd})
							})

					} else {
						return res
							.status(404)
							.json({message: mR_EL.el404})
					}

				})
				.catch((err) => {
					console.log(err)
					return res
						.status(500)
						.json({message: mR_EL.el500upd})
				})		
 		}
	})
}

/**
 * @api {delete} /equipelegendas/:id delEquipeLegenda
 * @apiVersion 1.0.0
 * @apiName delEquipeLegenda
 * @apiGroup Equipe Legenda
 *
 * @apiParam {String} id ID da equipe de legenda.
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "EquipeLegendaApagada"
 *     }
 *
 * @apiUse EquipeLegendaRetornoErro
 * @apiUse IDInvalidoErro
 */
function delEquipeLegenda(req, res) {

	const id = req.body.id || req.params.id

	Series
		.update({eq_leg : id}, { $set: {eq_leg : null}}, {multi: true})
		.then(() => {
			// não fazer nada
		})
		.catch((err) => {
			return res
				.status(500)
				.json({message: mR_EL.el500del})
		})

	Series
		.update({eq_leg_parc : id}, { $set: {eq_leg_parc : null}}, {multi: true})
		.then(() => {
			// não fazer nada
		})
		.catch((err) => {
			return res
				.status(500)
				.json({message: mR_EL.el500del})
		})

	EquipeLegendas
		.findByIdAndRemove(id)
		.then((equipelegenda) => {
			if (equipelegenda) {
				return res
					.status(200)
					.json({message: mR_EL.el200del})
			} else {
				return res
					.status(404)
					.json({message: mR_EL.el404})
			}
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(500)
				.json({message: mR_EL.el500del})
		})

}
