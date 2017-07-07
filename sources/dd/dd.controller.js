var Series = require('../series/series.model.js')
var gen = require('../generic/generic.controller.js')
var validate = require('../validate/validate.controller.js')
var validId = require('valid-objectid')
var log = require('../log/log.controller.js')
//
var generic = require('../generic/generic.default.js')
var mR_DD = generic.msgResponseDD
var eMV_DD = generic.errorMessagesValidatorDD

//

const noShowFields = '-__v'

module.exports = {
	updDD
}

/**
 * @api {patch} /series/dd updDD
 * @apiVersion 1.0.0
 * @apiName updDD
 * @apiGroup Download Diario
 *
 * @apiUse HeaderCType
 *
 * @apiParam {String} serie Array com as series que serão atualizadas.
 *
 * @apiUse SerieRequisicaoBody
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "DownloadDiarioAtualizado"
 *     }
 *
 * @apiUse SerieRetornoErroValidacao
 * @apiUse SerieRetornoErro
 * @apiUse IDInvalidoErro
 */
function updDD(req, res) { // patch

	log.log_updDD('========== Início')
	// log.debug_updDD('========== Início')

	if (!req.body.series) {
		
		log.log_updDD('ERRO - Body da requisição não tem a key "series"')
		log.log_updDD('========== Fim')

		return res
			.status(400)
			.json({message: mR_DD.dd400keynaoencontrada})

	}

	if (!Array.isArray(req.body.series)) {

		log.log_updDD('ERRO - O conteúdo da key "series" não é um array')
		log.log_updDD('========== Fim')

		return res
			.status(400)
			.json({message: mR_DD.dd400notarray})

	}

	var arr = req.body.series

	// fazendo o primeiro loop no body para validar as informacoes
	for (var i = 0, len = arr.length; i < len; i++) {

		const sre = arr[i]
		log.log_updDD(`Validando série: ${sre.nome}`)

		// ==================
		// Validar informacoes sa serie

		var valid_failed = false
		var nome_obj
		var id_obj
		var dd_temp_obj
		var dd_ep_obj
		var dd_dia_obj

		// Nome
		log.debug_updDD(`Nome: ${sre.nome}`)
		if (sre.nome) {

			log.debug_updDD('Nome presente')

		} else {

			log.debug_updDD('Nome ausente')
			valid_failed = true
			nome_obj = {
				param: 'nome',
				msg: eMV_DD.nome
			}
		}

		// ID
		log.debug_updDD(`ID: ${sre.id}`)
		if (sre.id) {
			
			log.debug_updDD('ID presente')
			if (!validId.isValid(sre.id)) {
				
				log.debug_updDD('ID inválido')
				valid_failed = true
				id_obj = {
					param: 'id',
					msg: eMV_DD.id,
					value: sre.id
				}
			} else {

				log.debug_updDD('ID válido')

			}
		} else { // undefined
			
			log.debug_updDD('ID ausente')
			valid_failed = true
			id_obj = {
				param: 'id',
				msg: eMV_DD.id
			}
		}

		// dd_temp
		log.debug_updDD(`DD Temp: ${sre.dd_temp}`)
		if (sre.dd_temp) {
			
			log.debug_updDD('DD Temp presente')
			if (sre.dd_temp != 'null') {

				if (!(!isNaN(parseFloat(sre.dd_temp)) && isFinite(sre.dd_temp))) {

					log.debug_updDD('DD Temp inválido')
					valid_failed = true
					dd_temp_obj = {
						param: 'dd_temp',
						msg: eMV_DD.dd_temp,
						value: sre.dd_temp
					}

				} else {

					log.debug_updDD('DD Temp numérico')

				}
			} else {

				log.debug_updDD('DD Temp null')

			}

		} else {
			// console.log('dd_temp undefined')

			log.debug_updDD('DD Temp ausente')
			valid_failed = true
			dd_temp_obj = {
				param: 'dd_temp',
				msg: eMV_DD.dd_temp
			}
			
		}

		// dd_ep
		// console.log()
		// console.log(`dd_ep [${sre.dd_ep}]`)
		if (sre.dd_ep) {
			// console.log('dd_ep presente')
		} else {
			// console.log('dd_ep undefined')
			valid_failed = true

			if (sre.dd_ep == "") {

				dd_ep_obj = {
					param: 'dd_ep',
					msg: eMV_DD.dd_ep,
					value: sre.dd_ep
				}

			} else {

				dd_ep_obj = {
					param: 'dd_ep',
					msg: eMV_DD.dd_ep
				}

			}

		}

		// dd_dia
		// console.log()
		// console.log(`dd_dia [${sre.dd_dia}]`)
		if (sre.dd_dia || sre.dd_dia == "") {
			// console.log('dd_dia presente')
		} else {
			// console.log('dd_dia undefined')
			valid_failed = true
			dd_dia_obj = {
				param: 'dd_dia',
				msg: eMV_DD.dd_dia
			}
			
		}

		//

		// console.log()
		// console.log(`valid_failed [${valid_failed}]`)
		if (valid_failed) {
			// console.log('tem erro')
			log.log_updDD('Série com erro')
			var arr_erros = []

			// nome
			if (sre.nome) {
				arr_erros.push({nome: sre.nome})
			} else {
				arr_erros.push(nome_obj)
			}

			// id
			if (id_obj) {
				// console.log('valid_failed - id = true')
				// console.log(id_obj)
				arr_erros.push(id_obj)
			}

			// dd_temp
			if (dd_temp_obj) {
				// console.log('valid_failed - dd_temp = true')
				// console.log(dd_temp_obj)
				arr_erros.push(dd_temp_obj)
			}

			// dd_ep
			if (dd_ep_obj) {
				// console.log('valid_failed - dd_ep = true')
				// console.log(dd_ep_obj)
				arr_erros.push(dd_ep_obj)
			}

			// dd_dia
			if (dd_dia_obj) {
				// console.log('valid_failed - dd_dia = true')
				// console.log(dd_dia_obj)
				arr_erros.push(dd_dia_obj)
			}

			log.log_updDD('========== Fim')
			return res
				.status(400)
				.json(arr_erros)

		}

		log.log_updDD('Série ok')

	}

	// console.log('updDD')
	// console.log(`isArray [${Array.isArray(req.body)}]`)
	// console.log(`qtde array [${req.body.length}]`)
	// console.log('conteudo do body')
	// console.log(req.body)

	// console.log('')
	// console.log('======================================================')
	// console.log('Fim do for da validacao, vai comecar o for para salvar')
	// console.log('======================================================')
	// console.log('')

	var aux = 0

	for (var i = 0, len = arr.length; i < len; i++) {

		// console.log(`i [${i}]`)
		// console.log(req.body[i].id)
		// console.log(req.body[i].nome)
		// console.log(req.body[i].eq_leg)

		const sre = arr[i]
		log.log_updDD(`Atualizando série: ${sre.nome}`)

		// ==================

		Series
			.findById(sre.id)
			.then((serie) => {

				if (serie) {

					// console.log(`serie [${serie.nome}] i [${i}]`)

					// nome
					if (serie.nome != sre.nome) {
						// console.log(`nome diferente - serie body [${sre.nome}] serie bd [${serie.nome}]`)
						log.log_updDD(`Nome da série diferente: Nome do Body: ${sre.nome} | Nome no banco ${serie.nome}`)
						log.log_updDD('========== Fim')
						return res
							.status(400)
							.json({message: mR_DD.dd400nomedif})
					}
					
					serie.dt_ult_at = gen.getCurrentDate()
					// dd_temp
					if (sre.dd_temp == "null") {
						serie.dd_temp = null
					} else {
						serie.dd_temp = sre.dd_temp
					}
					// dd_ep
					if (sre.dd_ep == "null") {
						serie.dd_ep = null
					} else {
						serie.dd_ep = sre.dd_ep
					}
					// dd_dia
					if (sre.dd_dia == "") {
						serie.dd_dia = ""
					} else if (sre.dd_dia == "null") {
						serie.dd_dia = null
					} else {
						serie.dd_dia = sre.dd_dia
					}
					
					serie
						.save()
						.then(() => {
							aux++
							// console.log(`incrementando aux [${aux}]`)
							// console.log(`salvando serie [${sre.nome}] i [${i}] length [${req.body.length}] aux [${aux}]`)
							log.log_updDD('Série salva')
							if (aux == arr.length) { // quando salvar a ultima serie do body com sucesso, envia a response
								// console.log('enviando a response')
								log.log_updDD('========== Fim')
								return res
									.status(200)
									.json({message: mR_DD.dd200})
							}
						})
						.catch((err) => {
							console.log(err)
							log.log_updDD('Erro ao salvar série')
							log.log_updDD('========== Fim')
							return res
								.status(500)
								.json({message: mR_DD.dd500salvarserie})
						})

				} else {
					log.log_updDD(`Série com o ID ${sre.id} não encontrada`)
					log.log_updDD('========== Fim')
					return res
						.status(404)
						.json({message: mR_DD.dd404})
				}

			})
			.catch((err) => {
				console.log(err)
				log.log_updDD(`Erro ao buscar série com o ID ${sre.id}`)
				log.log_updDD('========== Fim')
				return res
					.status(500)
					.json({message: mR_DD.dd500recserie})
			})

	}

}
