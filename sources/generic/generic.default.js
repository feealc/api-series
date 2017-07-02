
var errorMessagesValidatorSerie = {
	'nome': 'O nome é obrigatório',
	'sinalizador': 'O sinalizador é obrigatório e precisa ser entre 0 e 2',
	'status': 'O status é obrigatório e precisa ser entre 0 e 4',
	'sp': 'A data da season/series premiere precisa ser null ou uma data válida',
	'sm': 'A data da mid-season finale precisa ser null ou uma data válida',
	'hia': 'A data do hiatus precisa ser null ou uma data válida',
	'sf': 'A data da season/series finale precisa ser null ou uma data válida',
	'dia': 'O dia precisa ser um número entre 0 e 7',
	'eq_leg': 'A equipe de legenda precisa conter o id de uma cadastrada ou o de indefinido',
	'eq_leg_parc': 'A equipe de legenda parceira precisa conter o id de uma cadastrada, de indefinido ou de sem parceria',
	'assistido': 'Assistido precisa ser um valor booleano',
	'situacao': '',
	'situacao_temp': '',
	'emissora': 'A emissora precisa conter o id de uma cadastrada',
	'dt_inicio': 'A data de início precisa ser valida e estar no formato ISO 8601 (YYYY-MM-DD)',
	'dt_fim': 'A data de fim precisa ser valida e estar no formato ISO 8601 (YYYY-MM-DD)',
	'total_temp': 'O total de temporada precisa ser um número inteiro',
	'total_ep': 'O total de episódios precisa ser um número inteiro',
	'descN': 'A descrição precisa ser um array preenchido',
	'qtdeN': 'A quantidade precisa ser um array e os valores precisam ser números',
	'gravN': 'A gravação precisa ser um array e os valores precisam ser números',
	'dd_temp': '',
	'dd_ep': '',
	'dd_dia': '',
	'imdb_id': ''
}

var errorMessagesValidatorEmissora = {
	'nome': 'O nome é obrigatório'
}

var errorMessagesValidatorEquipeLegenda = {
	'nome': 'O nome é obrigatório'
}

var errorMessagesValidatorDD = {
	'id': 'O ID é obrigatório e precisa ser válido',
	'nome': 'O nome é obrigatório',
	'dd_temp': 'DD Temp precisa ser um número ou null',
	'dd_ep': 'DD Ep é obrigatório',
	'dd_dia': 'DD Dia é obrigatório'
}

//

var msgResponse = {
	'id400': 'IDInvalido'
}

var msgResponseSerie = {
	's200upd': 'SerieAlterada',
	's200del': 'SerieApagada',
	//
	's201': 'SerieCriada',
	//
	's400duplikey': 'SerieJaExiste',
	's404': 'SerieNaoEncontrada',
	//
	's500': 'ErroRecuperarSerie',
	's500all': 'ErroRecuperarSeries',
	's500create': 'ErroCriarSerie',
	's500del': 'ErroApagarSerie',
	's500one': 'ErroRecuperarSerie',
	's500upd': 'ErroAlterarSeries'
	//
}

var msgResponseEmissora = {
	'e200upd': 'EmissoraAlterada',
	'e200del': 'EmissoraApagada',
	//
	'e201': 'EmissoraCriada',
	//
	'e400duplikey': 'EmissoraJaExiste',
	'e404': 'EmissoraNaoEncontrada',
	//
	'e500all': 'ErroRecuperarEmissoras',
	'e500create': 'ErroCriarEmissora',
	'e500del': 'ErroApagarEmissora',
	'e500upd': 'ErroAlterarEmissora'
	//
}

var msgResponseEquipeLegenda = {
	'el200upd': 'EquipeLegendaAlterada',
	'el200del': 'EquipeLegendaApagada',
	//
	'el201': 'EquipeLegendaCriada',
	//
	'el400duplikey': 'EquipeLegendaJaExiste',
	'el404': 'EquipeLegendaNaoEncontrada',
	//
	'el500all': 'ErroRecuperarEquipeLegendas',
	'el500create': 'ErroCriarEquipeLegenda',
	'el500del': 'ErroApagarEquipeLegenda',
	'el500upd': 'ErroAlterarEquipeLegenda'
	//
}

var msgResponseDD = {
	'dd200': 'DDAtualizado',
	//
	'dd400notarray': 'NaoEhArray',
	'dd400nomedif': 'NomeSerieDiferente',
	'dd404': 'SerieNaoEncontrada',
	//
	'dd500salvarserie': 'ErroSalvarSerieDD',
	'dd500recserie': 'ErroRecuperarSerieDD',
	//
}

module.exports = {
	errorMessagesValidatorSerie,
	errorMessagesValidatorEmissora,
	errorMessagesValidatorEquipeLegenda,
	errorMessagesValidatorDD,
	//
	msgResponse,
	msgResponseSerie,
	msgResponseEmissora,
	msgResponseEquipeLegenda,
	msgResponseDD
}
