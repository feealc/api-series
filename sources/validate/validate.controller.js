var validId = require('valid-objectid')
var isValidDate = require('is-valid-date')
//
var generic = require('../generic/generic.default.js')
var mR = generic.msgResponse
var eMV_S = generic.errorMessagesValidatorSerie
var eMV_E = generic.errorMessagesValidatorEmissora
var eMV_EL = generic.errorMessagesValidatorEquipeLegenda

//

function id(req, res, next, value) {
  if (!validId.isValid(value)) {
    return res
      .status(400)
      .json({message: mR.id400})
  }
  next()
}

function runExpressValidatorSerie(req) {

	// const locale = 'pt-BR'

	req.checkBody('nome', eMV_S.nome).notEmpty()
	req.checkBody('sinalizador', eMV_S.sinalizador).isSinalizador()
	req.checkBody('status', eMV_S.status).isStatus()
	req.checkBody('sp', eMV_S.sp).optional().isData()
	req.checkBody('sm', eMV_S.sm).optional().isData()
	req.checkBody('hia', eMV_S.hia).optional().isData()
	req.checkBody('sf', eMV_S.sf).optional().isData()
	req.checkBody('dia', eMV_S.dia).isDia()
	req.checkBody('eq_leg', eMV_S.eq_leg).optional().isEquipeLegenda()
	req.checkBody('eq_leg_parc', eMV_S.eq_leg).optional().isEquipeLegenda()
	req.checkBody('assistido', eMV_S.assistido).optional().isBool()
	req.checkBody('situacao', eMV_S.situacao).optional() // criar a validacao
	req.checkBody('situacao_temp', eMV_S.situacao_temp).optional() // criar a validacao
	req.checkBody('emissora', eMV_S.emissora).optional().isEmissora()
	req.checkBody('dt_inicio', eMV_S.dt_inicio).optional().isDataISO8601()
	req.checkBody('dt_fim', eMV_S.dt_fim).optional().isDataISO8601()
	req.checkBody('total_temp', eMV_S.total_temp).optional().isInt()
	req.checkBody('total_ep', eMV_S.total_ep).optional().isInt()
	req.checkBody('descN', eMV_S.descN).optional().isArrayFill()
	req.checkBody('qtdeN', eMV_S.qtdeN).optional().isArrayNumber()
	req.checkBody('gravN', eMV_S.gravN).optional().isArrayNumber()
	req.checkBody('dd_temp', eMV_S.dd_temp).optional() // criar a validacao
	req.checkBody('dd_ep', eMV_S.dd_ep).optional() // criar a validacao
	req.checkBody('dd_dia', eMV_S.dd_dia).optional() // criar a validacao
	req.checkBody('imdb_id', eMV_S.imdb_id).optional() // criar a validacao

}

function runExpressValidatorEmissora(req) {

	req.checkBody('nome', eMV_E.nome).notEmpty()

}

function runExpressValidatorEquipeLegenda(req) {

	req.checkBody('nome', eMV_EL.nome).notEmpty()

}

var customValidators = {
    //
	isArray: function(value) {
        return Array.isArray(value)
    },
    //
    isArrayString: function(value) {
        if (!Array.isArray(value)) { // verificar se o que foi passado eh um array
            return false
    	}
        if (value.length == 0) { // o array precisa estar preenchido
            return false
        }
    	for (i = 0; i < value.length; i++) { // vericar posicao por posicao do array
            var v = value[i]
    		if (v.search(/[0-9]/) >= 0) { // verificar se tem numeros
    			return false
    		}
            if (v == "") { // verificar se nao esta em branco
                return false
            }
    	}
    	return true
    },
    //
    isArrayNumber: function(value) {
        if (!Array.isArray(value)) { // verificar se o que foi passado eh um array
            console.log('isArrayNumber - not array')
            return false
    	}
        // if (value.length == 0) { // o array precisa estar preenchido
        //     return false
        // }
    	for (i = 0; i < value.length; i++) { // vericar posicao por posicao do array
            var v = `${value[i]}`
    		if (!(!isNaN(parseFloat(v)) && isFinite(v))) { // verificar se eh um numero
                console.log(`isArrayNumber - NaN [${v}]`)
    			return false
    		}
            if (v == "") { // verificar se nao esta em branco
                console.log(`isArrayNumber - NaN [${v}]`)
                return false
            }
    	}
    	return true
    },
    //
    isArrayFill: function(value) {
    	if (!Array.isArray(value)) { // verificar se o que foi passado eh um array
            return false
    	}
    	for (i = 0; i < value.length; i++) { // vericar posicao por posicao do array
            var v = value[i]
            if (v == "") { // verificar se nao esta em branco
                return false
            }
    	}
    	return true
    },
    //
    isData: function(value) {
        value = `${value}` // transformar para string
    	if (value == '') { // verificar se nao esta vazio
            return false
        }
        if (value == 'null') { // null eh para apagar 
        	return true
        }
        var arrayDatas = value.split("-")
    	if (arrayDatas.length != 3) { // verificar se o array tem 3 elementos (ano, mes e dia)
    		return false
    	}
    	if (arrayDatas[0].length != 4) { // verificar se o ano tem 4 posicoes
    		return false
    	}
    	if (arrayDatas[1].length != 2 || arrayDatas[2].length != 2) { // verificar se o mes e dia tem 2 posicoes cada
    		return false
    	}
    	// montar a data no formato DD-MM-YYYY para o modulo validar se eh valida
    	const dt = `${arrayDatas[2]}-${arrayDatas[1]}-${arrayDatas[0]}`
    	return isValidDate(dt)
    },
    //
    isDataISO8601: function(value) {
        value = `${value}` // transformar para string
    	var arrayDatas = value.split("-")
    	if (arrayDatas.length != 3) { // verificar se o array tem 3 elementos (ano, mes e dia)
    		return false
    	}
    	if (arrayDatas[0].length != 4) { // verificar se o ano tem 4 posicoes
    		return false
    	}
    	if (arrayDatas[1].length != 2 || arrayDatas[2].length != 2) { // verificar se o mes e dia tem 2 posicoes cada
    		return false
    	}
    	// montar a data no formato DD-MM-YYYY para o modulo validar se eh valida
    	const dt = `${arrayDatas[2]}-${arrayDatas[1]}-${arrayDatas[0]}`
    	return isValidDate(dt)
    },
    //
    isSinalizador: function(value) {
    	value = `${value}` // transformar para string
    	if (value === undefined) { // verificar se esta presente
            return false
        }
        if (value == '') { // verificar se nao esta vazio
            return false
        }
        if (!(!isNaN(parseFloat(value)) && isFinite(value))) { // verificar se eh um numero
            return false
        }
        value = `${value}` // transformar para string
        if (value.search(/[\.|\,]/) >= 0) { // verificar se tem ponto ou virgula
            return false
        }
        if (value < 0 || value > 2) { // verificar se o numero esta no range de 0 e 2
            return false
        }
    	return true
    },
    //
    isStatus: function(value) {
    	value = `${value}` // transformar para string
    	if (value === undefined) { // verificar se esta presente
            return false
        }
        if (value == '') { // verificar se nao esta vazio
            return false
        }
        if (!(!isNaN(parseFloat(value)) && isFinite(value))) { // verificar se eh um numero
            return false
        }
        value = `${value}` // transformar para string
        if (value.search(/[\.|\,]/) >= 0) { // verificar se tem ponto ou virgula
            return false
        }
        if (value < 0 || value > 4) { // verificar se o numero esta no range de 0 e 4
            return false
        }
    	return true
    },
    //
    isDia: function(value) {
    	value = `${value}` // transformar para string
    	if (value === undefined) { // verificar se esta presente
    		return false
        }
        if (value == '') { // verificar se nao esta vazio
        	return false
        }
        if (!(!isNaN(parseFloat(value)) && isFinite(value))) { // verificar se eh um numero
        	return false
        }
        if (value.search(/[\.|\,]/) >= 0) { // verificar se tem ponto ou virgula
        	return false
        }
        if (value < 0 || value > 7) { // verificar se o numero esta no range de 0 e 4
        	return false
        }
    	return true
    },
    //
    isEquipeLegenda: function(value) {
    	if (value == '') { // verificar se nao esta vazio
            return false
        }
        return validId.isValid(value)
    },
    //
    isEmissora: function(value) {
    	if (value == '') { // verificar se nao esta vazio
            return false
        }
        return validId.isValid(value)
    },
    //
    isBool: function(value) {
    	if (value != 'false' && value != 'true') {
    		return false
    	}
    	return true
    }
    //
    // isPaisISO3166: function(value) {
    //     if (value.search(/[^A-Za-z]/) >= 0) { // verificar se tem algum numero, espaco ou caracter especial - aceita somente letras
    //         return false
    //     }
    //     if (value.length != 3) { // verificar se tem 3 posicoes de tamanho
    //         return false
    //     }
    // 	return true
    // },
    //
    // isUsername: function(value) {
    //     if (value === undefined) { // verificar se esta presente
    //         return false
    //     }
    //     if (value == '') { // verificar se nao esta vazio
    //         return false
    //     }
    //     if (value.search(/\s/) >= 0) { // verificar se tem espaco
    //         return false
    //     }
    //     if (value.search(/[^A-Za-z0-9]/) >= 0) { // verificar se tem caracter especial
    //         return false
    //     }
    //     return true
    // },
    //
    // isPassword: function(value) {
    //     if (value === undefined) { // verificar se esta presente
    //         return false
    //     }
    //     if (value == '') { // verificar se nao esta vazia
    //         return false
    //     }
    //     if (value.search(/\s/) >= 0) { // verificar se tem espaco
    //         return false
    //     }
    //     if (value.search(/[0-9]/) < 0) { // verificar se nao tem numero
    //         return false
    //     }
    //     if (value.search(/[a-z]/) < 0) { // verificar se nao tem letra minuscula
    //         return false
    //     }
    //     if (value.search(/[A-Z]/) < 0) { // verificar se nao tem letra maiuscula
    //         return false
    //     }
    //     if (value.search(/[^A-Za-z0-9]/) < 0) { // verificar se nao tem caracter especial
    //         return false
    //     }
    //     return true
    // },
    // isExpiresIn: function(value) {
    //     if (value == '') { // verificar se nao esta vazia
    //         return false
    //     }
    //     if (value.search(/\s/) >= 0) { // verificar se tem espaco
    //         return false
    //     }
    //     if (value.search(/[\.|\,]/) >= 0) { // verificar se tem ponto ou virgula
    //         return false
    //     }
    //     var len = value.length
    //     var qtde = value.substr(0, len - 1)
    //     if (!(!isNaN(parseFloat(qtde)) && isFinite(qtde))) { // verificar se eh um numero
    //         return false
    //     }
    //     var tipo = value.substr(len - 1, len)
    //     if (tipo != 's' && tipo != 'm' && tipo != 'h') {
    //         return false
    //     }
    //     return true
    // }
}

module.exports = {
	id,
	//
	runExpressValidatorSerie,
	runExpressValidatorEmissora,
	runExpressValidatorEquipeLegenda,
	//
	customValidators
}
