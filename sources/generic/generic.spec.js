
var expressValidatorParam = {
	'param': 'param',
	'msg': 'msg',
	'value': 'value',
	'array2': ['param', 'msg'],
	'array3': ['param','msg','value']
}

// ================================================================================================
// SERIES
// ================================================================================================

// Model
var objModelSerie = {
	arrayKeys: [
		'_id',
		'nome',
		'sinalizador',
		'status',
		'sp',
		'sm',
		'hia',
		'sf',
		'dia',
		'eq_leg',
		'eq_leg_parc',
		'assistido',
		'situacao',
		'situacao_temp',
		'emissora',
		'dt_inicio',
		'dt_fim',
		'total_temp',
		'total_ep',
		'descN',
		'qtdeN',
		'gravN',
		'dt_criacao',
		'dt_ult_at',
		'dd_temp',
		'dd_ep',
		'dd_dia',
		'imdb_id'
	],
	param: {
		'id': '_id',
		'nome': 'nome',
		'sinalizador': 'sinalizador',
		'status': 'status',
		'sp': 'sp',
		'sm': 'sm',
		'hia': 'hia',
		'sf': 'sf',
		'dia': 'dia',
		'eq_leg': 'eq_leg',
		'eq_leg_parc': 'eq_leg_parc',
		'assistido': 'assistido',
		'situacao': 'situacao',
		'situacao_temp': 'situacao_temp',
		'emissora': 'emissora',
		'dt_inicio': 'dt_inicio',
		'dt_fim': 'dt_fim',
		'total_temp': 'total_temp',
		'total_ep': 'total_ep',
		'descN': 'descN',
		'qtdeN': 'qtdeN',
		'gravN': 'gravN',
		'dt_criacao': 'dt_criacao',
		'dt_ult_at': 'dt_ult_at',
		'dd_temp': 'dd_temp',
		'dd_ep': 'dd_ep',
		'dd_dia': 'dd_dia',
		'imdb_id': 'imdb_id',
		'v': '__v'
	}
}

// Create
var objCreateSerie = {
	serieOk: {
		"nome": "Serie Teste",
		"sinalizador": 1,
		"status": 2,
		"dia": 3,
		"sp": "1991-03-27",
		"sm": "1959-12-15",
		"hia": "1958-05-13",
		"sf": "2005-03-27",
		"eq_leg": "001indf",
		"eq_leg_parc": "001indf"
	},
	serieOkDuplicate: {
		"nome": "Serie Teste",
		"sinalizador": 1,
		"status": 2,
		"dia": 3
	},
	serieNomeAusente: {
		// "nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3"
	},
	serieSinalizadorAusente: {
		"nome": "Serie Teste",
		// "sinalizador": "1",
		"status": "2",
		"dia": "3"
	},
	serieSinalizadorInvalidoNaN: {
		"nome": "Serie Teste",
		"sinalizador": "4f",
		"status": "2",
		"dia": "3"
	},
	serieSinalizadorInvalidoPonto: {
		"nome": "Serie Teste",
		"sinalizador": "1.5",
		"status": "2",
		"dia": "3"
	},
	serieSinalizadorInvalidoVirgula: {
		"nome": "Serie Teste",
		"sinalizador": "0,8",
		"status": "2",
		"dia": "3"
	},
	serieSinalizadorInvalidoRange: {
		"nome": "Serie Teste",
		"sinalizador": "4",
		"status": "2",
		"dia": "3"
	},
	serieStatusAusente: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		// "status": "2",
		"dia": "3"
	},
	serieStatusInvalidoNaN: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "0d",
		"dia": "3"
	},
	serieStatusInvalidoPonto: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "3.4",
		"dia": "3"
	},
	serieStatusInvalidoVirgula: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "1,7",
		"dia": "3"
	},
	serieStatusInvalidoRange: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "8",
		"dia": "3"
	},
	serieDiaAusente: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		// "dia": "3"
	},
	serieDiaInvalidoNaN: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "0",
		"dia": "3c"
	},
	serieDiaInvalidoPonto: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "3",
		"dia": "1.9"
	},
	serieDiaInvalidoVirgula: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "1",
		"dia": "6,2"
	},
	serieDiaInvalidoRange: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "11"
	},
	serieSPVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sp": ""
	},
	serieSPAnoInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sp": "199-03-27"
	},
	serieSPMesInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sp": "1991-3-27"
	},
	serieSPDiaInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sp": "1991-03-2"
	},
	serieSPDataInvalida: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sp": "1991-13-02"
	},
	serieSMVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sm": ""
	},
	serieSMAnoInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sm": "991-03-27"
	},
	serieSMMesInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sm": "1991-0-27"
	},
	serieSMDiaInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sm": "1991-03-0"
	},
	serieSMDataInvalida: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sm": "2015-02-29"
	},
	serieHIAVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"hia": ""
	},
	serieHIAAnoInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"hia": "991-03-27"
	},
	serieHIAMesInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"hia": "1991-0-27"
	},
	serieHIADiaInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"hia": "1991-03-0"
	},
	serieHIADataInvalida: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"hia": "2015-02-29"
	},
	serieSFVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sf": ""
	},
	serieSFAnoInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sf": "991-03-27"
	},
	serieSFMesInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sf": "1991-0-27"
	},
	serieSFDiaInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sf": "1991-03-0"
	},
	serieSFDataInvalida: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sf": "2015-02-29"
	},
	serieEqLegVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"eq_leg": ""
	},
	serieEqLegInvalida: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"eq_leg": "fasfievuinckjbvksjbvs"
	},
	serieEqLegParcVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"eq_leg_parc": ""
	},
	serieEqLegParcInvalida: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"eq_leg_parc": "ryewuuewiotuewpuopqwirqwop"
	},
	serieAssistidoInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"assistido": "false "
	},
	// situacao
	// situacao_temp
	serieEmissoraVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"emissora": ""
	},
	serieEmissoraInvalida: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"emissora": "vzxmvnzmvnxzmvzxvbmzxvzxmvnz"
	},
	serieDataInicioVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_inicio": ""
	},
	serieDataInicioAnoInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_inicio": "991-03-27"
	},
	serieDataInicioMesInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_inicio": "1991-0-27"
	},
	serieDataInicioDiaInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_inicio": "1991-03-0"
	},
	serieDataInicioDataInvalida: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_inicio": "2015-02-29"
	},
	serieDataFimVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_fim": ""
	},
	serieDataFimAnoInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_fim": "991-03-27"
	},
	serieDataFimMesInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_fim": "1991-0-27"
	},
	serieDataFimDiaInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_fim": "1991-03-0"
	},
	serieDataFimDataInvalida: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_fim": "2015-02-29"
	},
	serieTotalTempVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"total_temp": ""
	},
	serieTotalTempInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"total_temp": "g7"
	},
	serieTotalEpVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"total_ep": ""
	},
	serieTotalEpInvalido: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"total_ep": " 7"
	},
	serieDescNVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"descN": ""
	},
	serieDescNValorSimples: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"descN": "Todos"
	},
	serieDescNArrayValorVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"descN": ['Todos','1 ao 10','','Nenhum']
	},
	serieDescNArrayValorCaracterEspecial: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"descN": ['Todos','1 ao 10','1 ao 15$','Nenhum']
	},
	serieQtdeNVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"qtdeN": ""
	},
	serieQtdeNValorSimples: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"qtdeN": "7"
	},
	serieQtdeNArrayValorVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"qtdeN": [10, 20, "", 0]
	},
	serieQtdeNArrayValorPonto: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"qtdeN": [10, 4.2, 2, 0]
	},
	serieQtdeNArrayValorVirgula: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"qtdeN": [10, 20, "10,9", 0]
	},
	serieGravNVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"gravN": ""
	},
	serieGravNValorSimples: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"gravN": "7"
	},
	serieGravNArrayValorVazio: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"gravN": [10, 20, "", 0]
	},
	serieGravNArrayValorPonto: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"gravN": [10, 4.2, 2, 0]
	},
	serieGravNArrayValorVirgula: {
		"nome": "Serie Teste",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"gravN": [10, 20, "10,9", 0]
	}
}

// Update Parcial
var objUpdParcialSerie = {
	serieOk: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": 0,
		"status": 0,
		"dia": 0,
		"sp": "null",
		"sm": "null",
		"hia": "null",
		"sf": "null",
		"total_temp": 0,
		"total_ep": 0,
		"eq_leg_parc": "002sp"
	},
	serieOkDuplicate: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": 2,
		"status": 3,
		"dia": 4
	},
	serieNomeAusente: {
		// "nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3"
	},
	serieSinalizadorAusente: {
		"nome": "Serie Teste Upd Parcial",
		// "sinalizador": "1",
		"status": "2",
		"dia": "3"
	},
	serieSinalizadorInvalidoNaN: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "4f",
		"status": "2",
		"dia": "3"
	},
	serieSinalizadorInvalidoPonto: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1.5",
		"status": "2",
		"dia": "3"
	},
	serieSinalizadorInvalidoVirgula: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "0,8",
		"status": "2",
		"dia": "3"
	},
	serieSinalizadorInvalidoRange: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "4",
		"status": "2",
		"dia": "3"
	},
	serieStatusAusente: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		// "status": "2",
		"dia": "3"
	},
	serieStatusInvalidoNaN: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "0d",
		"dia": "3"
	},
	serieStatusInvalidoPonto: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "3.4",
		"dia": "3"
	},
	serieStatusInvalidoVirgula: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "1,7",
		"dia": "3"
	},
	serieStatusInvalidoRange: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "8",
		"dia": "3"
	},
	serieDiaAusente: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		// "dia": "3"
	},
	serieDiaInvalidoNaN: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "0",
		"dia": "3c"
	},
	serieDiaInvalidoPonto: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "3",
		"dia": "1.9"
	},
	serieDiaInvalidoVirgula: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "1",
		"dia": "6,2"
	},
	serieDiaInvalidoRange: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "11"
	},
	serieSPVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sp": ""
	},
	serieSPAnoInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sp": "199-03-27"
	},
	serieSPMesInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sp": "1991-3-27"
	},
	serieSPDiaInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sp": "1991-03-2"
	},
	serieSPDataInvalida: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sp": "1991-13-02"
	},
	serieSMVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sm": ""
	},
	serieSMAnoInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sm": "991-03-27"
	},
	serieSMMesInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sm": "1991-0-27"
	},
	serieSMDiaInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sm": "1991-03-0"
	},
	serieSMDataInvalida: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sm": "2015-02-29"
	},
	serieHIAVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"hia": ""
	},
	serieHIAAnoInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"hia": "991-03-27"
	},
	serieHIAMesInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"hia": "1991-0-27"
	},
	serieHIADiaInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"hia": "1991-03-0"
	},
	serieHIADataInvalida: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"hia": "2015-02-29"
	},
	serieSFVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sf": ""
	},
	serieSFAnoInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sf": "991-03-27"
	},
	serieSFMesInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sf": "1991-0-27"
	},
	serieSFDiaInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sf": "1991-03-0"
	},
	serieSFDataInvalida: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sf": "2015-02-29"
	},
	serieEqLegVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"eq_leg": ""
	},
	serieEqLegInvalida: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"eq_leg": "fasfievuinckjbvksjbvs"
	},
	serieEqLegParcVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"eq_leg_parc": ""
	},
	serieEqLegParcInvalida: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"eq_leg_parc": "ryewuuewiotuewpuopqwirqwop"
	},
	serieAssistidoInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"assistido": "false "
	},
	// situacao
	// situacao_temp
	serieEmissoraVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"emissora": ""
	},
	serieEmissoraInvalida: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"emissora": "vzxmvnzmvnxzmvzxvbmzxvzxmvnz"
	},
	serieDataInicioVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_inicio": ""
	},
	serieDataInicioAnoInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_inicio": "991-03-27"
	},
	serieDataInicioMesInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_inicio": "1991-0-27"
	},
	serieDataInicioDiaInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_inicio": "1991-03-0"
	},
	serieDataInicioDataInvalida: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_inicio": "2015-02-29"
	},
	serieDataFimVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_fim": ""
	},
	serieDataFimAnoInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_fim": "991-03-27"
	},
	serieDataFimMesInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_fim": "1991-0-27"
	},
	serieDataFimDiaInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_fim": "1991-03-0"
	},
	serieDataFimDataInvalida: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_fim": "2015-02-29"
	},
	serieTotalTempVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"total_temp": ""
	},
	serieTotalTempInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"total_temp": "g7"
	},
	serieTotalEpVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"total_ep": ""
	},
	serieTotalEpInvalido: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"total_ep": " 7"
	},
	serieDescNVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"descN": ""
	},
	serieDescNValorSimples: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"descN": "Todos"
	},
	serieDescNArrayValorVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"descN": ['Todos','1 ao 10','','Nenhum']
	},
	serieDescNArrayValorCaracterEspecial: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"descN": ['Todos','1 ao 10','1 ao 15$','Nenhum']
	},
	serieQtdeNVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"qtdeN": ""
	},
	serieQtdeNValorSimples: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"qtdeN": "7"
	},
	serieQtdeNArrayValorVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"qtdeN": [10, 20, "", 0]
	},
	serieQtdeNArrayValorPonto: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"qtdeN": [10, 4.2, 2, 0]
	},
	serieQtdeNArrayValorVirgula: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"qtdeN": [10, 20, "10,9", 0]
	},
	serieGravNVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"gravN": ""
	},
	serieGravNValorSimples: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"gravN": "7"
	},
	serieGravNArrayValorVazio: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"gravN": [10, 20, "", 0]
	},
	serieGravNArrayValorPonto: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"gravN": [10, 4.2, 2, 0]
	},
	serieGravNArrayValorVirgula: {
		"nome": "Serie Teste Upd Parcial",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"gravN": [10, 20, "10,9", 0]
	}
}

// Update Full
var objUpdFullSerie = {
	serieOk: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": 2,
		"status": 3,
		"dia": 4
	},
	serieOkDuplicate: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": 2,
		"status": 3,
		"dia": 4
	},
	serieNomeAusente: {
		// "nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3"
	},
	serieSinalizadorAusente: {
		"nome": "Serie Teste Upd Full",
		// "sinalizador": "1",
		"status": "2",
		"dia": "3"
	},
	serieSinalizadorInvalidoNaN: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "4f",
		"status": "2",
		"dia": "3"
	},
	serieSinalizadorInvalidoPonto: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1.5",
		"status": "2",
		"dia": "3"
	},
	serieSinalizadorInvalidoVirgula: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "0,8",
		"status": "2",
		"dia": "3"
	},
	serieSinalizadorInvalidoRange: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "4",
		"status": "2",
		"dia": "3"
	},
	serieStatusAusente: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		// "status": "2",
		"dia": "3"
	},
	serieStatusInvalidoNaN: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "0d",
		"dia": "3"
	},
	serieStatusInvalidoPonto: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "3.4",
		"dia": "3"
	},
	serieStatusInvalidoVirgula: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "1,7",
		"dia": "3"
	},
	serieStatusInvalidoRange: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "8",
		"dia": "3"
	},
	serieDiaAusente: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		// "dia": "3"
	},
	serieDiaInvalidoNaN: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "0",
		"dia": "3c"
	},
	serieDiaInvalidoPonto: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "3",
		"dia": "1.9"
	},
	serieDiaInvalidoVirgula: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "1",
		"dia": "6,2"
	},
	serieDiaInvalidoRange: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "11"
	},
	serieSPVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sp": ""
	},
	serieSPAnoInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sp": "199-03-27"
	},
	serieSPMesInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sp": "1991-3-27"
	},
	serieSPDiaInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sp": "1991-03-2"
	},
	serieSPDataInvalida: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sp": "1991-13-02"
	},
	serieSMVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sm": ""
	},
	serieSMAnoInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sm": "991-03-27"
	},
	serieSMMesInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sm": "1991-0-27"
	},
	serieSMDiaInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sm": "1991-03-0"
	},
	serieSMDataInvalida: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sm": "2015-02-29"
	},
	serieHIAVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"hia": ""
	},
	serieHIAAnoInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"hia": "991-03-27"
	},
	serieHIAMesInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"hia": "1991-0-27"
	},
	serieHIADiaInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"hia": "1991-03-0"
	},
	serieHIADataInvalida: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"hia": "2015-02-29"
	},
	serieSFVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sf": ""
	},
	serieSFAnoInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sf": "991-03-27"
	},
	serieSFMesInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sf": "1991-0-27"
	},
	serieSFDiaInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sf": "1991-03-0"
	},
	serieSFDataInvalida: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"sf": "2015-02-29"
	},
	serieEqLegVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"eq_leg": ""
	},
	serieEqLegInvalida: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"eq_leg": "fasfievuinckjbvksjbvs"
	},
	serieEqLegParcVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"eq_leg_parc": ""
	},
	serieEqLegParcInvalida: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"eq_leg_parc": "ryewuuewiotuewpuopqwirqwop"
	},
	serieAssistidoInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"assistido": "false "
	},
	// situacao
	// situacao_temp
	serieEmissoraVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"emissora": ""
	},
	serieEmissoraInvalida: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"emissora": "vzxmvnzmvnxzmvzxvbmzxvzxmvnz"
	},
	serieDataInicioVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_inicio": ""
	},
	serieDataInicioAnoInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_inicio": "991-03-27"
	},
	serieDataInicioMesInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_inicio": "1991-0-27"
	},
	serieDataInicioDiaInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_inicio": "1991-03-0"
	},
	serieDataInicioDataInvalida: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_inicio": "2015-02-29"
	},
	serieDataFimVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_fim": ""
	},
	serieDataFimAnoInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_fim": "991-03-27"
	},
	serieDataFimMesInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_fim": "1991-0-27"
	},
	serieDataFimDiaInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_fim": "1991-03-0"
	},
	serieDataFimDataInvalida: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"dt_fim": "2015-02-29"
	},
	serieTotalTempVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"total_temp": ""
	},
	serieTotalTempInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"total_temp": "g7"
	},
	serieTotalEpVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"total_ep": ""
	},
	serieTotalEpInvalido: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"total_ep": " 7"
	},
	serieDescNVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"descN": ""
	},
	serieDescNValorSimples: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"descN": "Todos"
	},
	serieDescNArrayValorVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"descN": ['Todos','1 ao 10','','Nenhum']
	},
	serieDescNArrayValorCaracterEspecial: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"descN": ['Todos','1 ao 10','1 ao 15$','Nenhum']
	},
	serieQtdeNVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"qtdeN": ""
	},
	serieQtdeNValorSimples: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"qtdeN": "7"
	},
	serieQtdeNArrayValorVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"qtdeN": [10, 20, "", 0]
	},
	serieQtdeNArrayValorPonto: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"qtdeN": [10, 4.2, 2, 0]
	},
	serieQtdeNArrayValorVirgula: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"qtdeN": [10, 20, "10,9", 0]
	},
	serieGravNVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"gravN": ""
	},
	serieGravNValorSimples: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"gravN": "7"
	},
	serieGravNArrayValorVazio: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"gravN": [10, 20, "", 0]
	},
	serieGravNArrayValorPonto: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"gravN": [10, 4.2, 2, 0]
	},
	serieGravNArrayValorVirgula: {
		"nome": "Serie Teste Upd Full",
		"sinalizador": "1",
		"status": "2",
		"dia": "3",
		"gravN": [10, 20, "10,9", 0]
	}
}

// ================================================================================================
// EMISSORAS
// ================================================================================================

// Model
var objModelEmissora = {
	arrayKeys: [
		'_id',
		'nome',
		'dt_criacao'
	],
	param: {
		'id': '_id',
		'nome': 'nome',
		'dt_criacao': 'dt_criacao',
		'v': '__v'
	}
}

// Create
var objCreateEmissora = {
	emissoraOk: {
		"nome": "Emissora Teste"
	},
	emissoraOkDuplicate: {
		"nome": "Emissora Teste"
	},
	emissoraNomeAusente: {
		// "nome": "Emissora Teste"
	},
	emissoraNomeVazio: {
		"nome": ""
	}
}

// Update
var objUpdEmissora = {
	emissoraOk: {
		"nome": "Emissora Teste Upd"
	},
	emissoraNomeAusente: {
		// "nome": "Emissora Teste Upd"
	},
	emissoraNomeVazio: {
		"nome": ""
	},
	emissoraUpdSerie: {
		"nome": "Serie Teste Upd Emissora",
		"sinalizador": 2,
		"status": 3,
		"dia": 4,
		"emissora": ""
	}
}

// ================================================================================================
// EQUIPE DE LEGENDAS
// ================================================================================================

// Model
var objModelEquipeLegenda = {
	arrayKeys: [
		'_id',
		'nome',
		'nomeUP',
		'dt_criacao'
	],
	param: {
		'id': '_id',
		'nome': 'nome',
		'nomeUP': 'nomeUP',
		'dt_criacao': 'dt_criacao',
		'v': '__v'
	}
}

// Create
var objCreateEquipeLegenda = {
	equipelegendaOk: {
		"nome": "Equipe Legenda Teste"
	},
	equipelegendaOkDuplicate: {
		"nome": "Equipe Legenda Teste"
	},
	equipelegendaNomeAusente: {
		// "nome": "Equipe Legenda Teste"
	},
	equipelegendaNomeVazio: {
		"nome": ""
	}
}

// Update
var objUpdEquipeLegenda = {
	equipelegendaOk: {
		"nome": "Equipe Legenda Teste Upd"
	},
	equipelegendaNomeAusente: {
		// "nome": "Equipe Legenda Teste Upd"
	},
	equipelegendaNomeVazio: {
		"nome": ""
	},
	equipelegendaUpdSerie: {
		"nome": "Serie Teste Upd Equipe Legenda",
		"sinalizador": 2,
		"status": 3,
		"dia": 4,
		"eq_leg": "",
		"eq_leg_parc": ""
	}
}

module.exports = {
	//
	expressValidatorParam,
	// Serie
	objModelSerie,
	objCreateSerie,
	objUpdFullSerie,
	objUpdParcialSerie,
	// Emissora
	objModelEmissora,
	objCreateEmissora,
	objUpdEmissora,
	// Equipe Legenda
	objModelEquipeLegenda,
	objCreateEquipeLegenda,
	objUpdEquipeLegenda
}
