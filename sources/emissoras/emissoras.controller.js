var Emissoras = require('./emissoras.model.js')
var Series = require('../series/series.model.js')
var gen = require('../generic/generic.controller.js')
var validate = require('../validate/validate.controller.js')
//
var generic = require('../generic/generic.default.js')
var mR_E = generic.msgResponseEmissora

//

const noShowFields = '-__v'

module.exports = {
	getAllEmissoras,
	createEmissora,
	updEmissora,
	delEmissora
}

/**
 * @api {get} /emissoras getAllEmissoras
 * @apiVersion 1.0.0
 * @apiName getAllEmissoras
 * @apiGroup Emissora
 *
 * @apiUse EmissoraRetornoSucesso
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
function getAllEmissoras(req, res) {

	Emissoras
		.find({}, noShowFields)
		.sort('nome')
		.then((emissoras) => {
			return res
				.status(200)
				.json(emissoras)
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(500)
				.json({message: mR_E.e500all})
		})
}

/**
 * @api {post} /emissoras createEmissora
 * @apiVersion 1.0.0
 * @apiName createEmissora
 * @apiGroup Emissora
 *
 * @apiUse HeaderCType
 *
 * @apiUse EmissoraRequisicaoBody
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 * @apiSuccess {String} ID O ID da emissora criada.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "EmissoraCriada",
 *       "_id": "XXX"
 *     }
 *
 * @apiUse EmissoraRetornoErroValidacao
 */
function createEmissora(req, res) {

	validate.runExpressValidatorEmissora(req)

 	req.getValidationResult().then(function(result) {

 		if (!result.isEmpty()) {

 			return res
 				.status(400)
 				.json(result.array())
 		
 		} else {

 			const emissora = new Emissoras(req.body)
 			
 			emissora
				.save()
				.then((emissora) => {
					return res
						.status(201)
						.json({message: mR_E.e201, '_id': emissora._id})
				})
				.catch((err) => {
					if (err.code == 11000) { // duplicate key
						return res
							.status(400)
							.json({message: mR_E.e400duplikey})
					} else {
						console.log(err)
					}
					return res
						.status(500)
						.json({message: mR_E.e500create})
				})
 		}
	})
}

/**
 * @api {put} /emissoras/:id updEmissora
 * @apiVersion 1.0.0
 * @apiName updEmissora
 * @apiGroup Emissora
 *
 * @apiUse HeaderCType
 *
 * @apiParam {String} id ID da emissora.
 *
 * @apiUse EmissoraRequisicaoBody
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "EmissoraAlterada"
 *     }
 *
 * @apiUse EmissoraRetornoErroValidacao
 * @apiUse EmissoraRetornoErro
 * @apiUse IDInvalidoErro
 */
function updEmissora(req, res) {

	validate.runExpressValidatorEmissora(req)

 	req.getValidationResult().then(function(result) {

 		if (!result.isEmpty()) {
 			
 			return res
 				.status(400)
 				.json(result.array())

 		} else {

 			const id = req.body.id || req.params.id

			Emissoras
				.findById(id)
				.then((emissora) => {

					if (emissora) {

						emissora.nome = req.body.nome

						emissora
							.save()
							.then(() => {
								return res
									.status(200)
									.json({message: mR_E.e200upd})
							})
							.catch((err) => {
								if (err.code == 11000) { // duplicate key
									return res
										.status(400)
										.json({message: mR_E.e400duplikey})
								} else {
									console.log(err)
								}
								return res
									.status(500)
									.json({message: mR_E.e500upd})
							})

					} else {
						return res
							.status(404)
							.json({message: mR_E.e404})
					}

				})
				.catch(() => {
					return res
						.status(500)
						.json({message: mR_E.e500upd})
				})		
 		}
	})
}

/**
 * @api {delete} /emissoras/:id delEmissora
 * @apiVersion 1.0.0
 * @apiName delEmissora
 * @apiGroup Emissora
 *
 * @apiParam {String} id ID da emissora.
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "EmissoraApagada"
 *     }
 *
 * @apiUse EmissoraRetornoErro
 * @apiUse IDInvalidoErro
 */
function delEmissora(req, res) {

	const id = req.body.id || req.params.id

	Series
		.update({emissora : id}, { $set: {emissora : null}}, {multi: true})
		.then(() => {
			// return res
			// 	.status(200)
			// 	.json({message: 'emissora setada como null com sucesso'})
		})
		.catch((err) => {
			return res
				.status(500)
				.json({message: mR_E.e500del})
		})

	Emissoras
		.findByIdAndRemove(id)
		.then((emissora) => {
			if (emissora) {
				return res
					.status(200)
					.json({message: mR_E.e200del})
			} else {
				return res
					.status(404)
					.json({message: mR_E.e404})
			}
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(500)
				.json({message: mR_E.e500del})
		})
}
