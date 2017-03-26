
var errorMessagesValidatorSerie = {
	'nome': 'O nome é obrigatório',
	'sinalizador': 'O sinalizador é obrigatório e precisa ser entre 0 e 2',
	'status': 'O status é obrigatório e precisa ser entre 0 e 4',
	'sp': 'A data da season/series premiere precisa ser null ou uma data válida',
	'sm': 'A data da mid-season finale precisa ser null ou uma data válida',
	'hia': 'A data do hiatus precisa ser null ou uma data válida',
	'sf': 'A data da season/series finale precisa ser null ou uma data válida',
	'dia': 'O dia precisa ser um número entre 0 e 7',
	'eq_leg': 'A equipe de legenda precisa conter o id de uma cadastrada',
	// eq_leg_parc
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

var errorMessagesValidatorUsuario = {
	// 'username': 'O username é obrigatório e não pode conter espaço e caracter especial',
	// 'password': 'A senha é obrigatória e precisa ter uma letra maiúscula, um número e um caracter especial',
	// 'email': 'O e-mail é obrigatório e precisa ser válido'
}

var errorMessagesValidatorUsuarioAuth = {
	// 'username': 'O username é obrigatório',
	// 'password': 'A senha é obrigatória',
	// 'expiresIn': 'A expiração do token precisa estar no formato N[s|m|h]. Exemplo: 10s (10 segundos) ou 2h (2 horas)'
}

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

module.exports = {
	errorMessagesValidatorSerie,
	errorMessagesValidatorUsuario,
	errorMessagesValidatorUsuarioAuth,
	//
	msgResponse,
	msgResponseSerie
}
