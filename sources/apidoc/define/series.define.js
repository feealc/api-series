
// ================================================================================================
// Requisicao - Body
// ================================================================================================

/**
 * @apiDefine SerieRequisicaoBody
 *
 * @apiParam (Body) {String} nome Nome da serie.
 * @apiParam (Body) {Number} sinalizador Sinalizador da serie.
 * @apiParam (Body) {Number} status Status da serie.
 * @apiParam (Body) {String} [sp] Data da Season/Series Premiere (ISO 8601).
 * @apiParam (Body) {String} [sm] Data da Mid-Season Finale (ISO 8601).
 * @apiParam (Body) {String} [hia] Data da volta do Hiatus (ISO 8601).
 * @apiParam (Body) {String} [sf] Data da Season/Series Finale (ISO 8601).
 * @apiParam (Body) {Number} dia Dia de exibicao da serie.
 * @apiParam (Body) {String} [eq_leg] Equipe de Legenda da serie.
 * @apiParam (Body) {String} [eq_leg_parc] Equipe de Legenda parceira da serie.
 * @apiParam (Body) {Boolean} [assistido] Flag para indicar se a serie ja foi assistida.
 * @apiParam (Body) {String} [situacao] Situacao da serie.
 * @apiParam (Body) {Number} [situacao_temp] Quantidade de temporadas que a serie foi renovada.
 * @apiParam (Body) {String} [emissora] Emissora da serie.
 * @apiParam (Body) {String} [dt_inicio] Data de inicio da exibicao da serie.
 * @apiParam (Body) {String} [dt_fim] Data do fim da exibicao da serie.
 * @apiParam (Body) {Number} [total_temp] Total de temporadas da serie.
 * @apiParam (Body) {Number} [total_ep] Total de episodios da serie.
 * @apiParam (Body) {String[]} [descN] Array com a descricao das temporadas.
 * @apiParam (Body) {Number[]} [qtdeN] Array com a quantidade de episodios das temporadas.
 * @apiParam (Body) {Number[]} [gravN] Array com a gravacao das temporadas.
 * @apiParam (Body) {Number} [dd_temp] KKK.
 * @apiParam (Body) {String} [dd_ep] KKK.
 * @apiParam (Body) {String} [dd_dia] KKK.
 * @apiParam (Body) {String} [imdb_id] IMDb ID da serie no site IMDb.
*/


// ================================================================================================
// Retorno - Sucesso
// ================================================================================================

/**
 * @apiDefine SerieRetornoSucesso
 *
 * @apiSuccess {String} _id ID da serie.
 * @apiSuccess {String} nome Nome da serie.
 * @apiSuccess {Number} sinalizador Sinalizador da serie.
 * @apiSuccess {Number} status Status da serie.
 * @apiSuccess {String} sp Data da Season/Series Premiere (ISO 8601).
 * @apiSuccess {String} sm Data da Mid-Season Finale (ISO 8601).
 * @apiSuccess {String} hia Data da volta do Hiatus (ISO 8601).
 * @apiSuccess {String} sf Data da Season/Series Finale (ISO 8601).
 * @apiSuccess {Number} dia Dia de exibicao da serie.
 * @apiSuccess {String} eq_leg Equipe de Legenda da serie.
 * @apiSuccess {String} eq_leg_parc Equipe de Legenda parceira da serie.
 * @apiSuccess {Boolean} assistido Flag para indicar se a serie ja foi assistida.
 * @apiSuccess {String} situacao Situacao da serie.
 * @apiSuccess {Number} situacao_temp Quantidade de temporadas que a serie foi renovada.
 * @apiSuccess {String} emissora Emissora da serie.
 * @apiSuccess {String} dt_inicio Data de inicio da exibicao da serie.
 * @apiSuccess {String} dt_fim Data do fim da exibicao da serie.
 * @apiSuccess {Number} total_temp Total de temporadas da serie.
 * @apiSuccess {Number} total_ep Total de episodios da serie.
 * @apiSuccess {String[]} descN Array com a descricao das temporadas.
 * @apiSuccess {Number[]} qtdeN Array com a quantidade de episodios das temporadas.
 * @apiSuccess {Number[]} gravN Array com a gravacao das temporadas.
 * @apiSuccess {String} dt_criacao Data de criação (ISO 8601).
 * @apiSuccess {String} dt_ult_at Data da última modificação (ISO 8601).
 * @apiSuccess {Number} dd_temp KKK.
 * @apiSuccess {String} dd_ep KKK.
 * @apiSuccess {String} dd_dia KKK.
 * @apiSuccess {String} imdb_id IMDb ID da serie no site IMDb.
*/


// ================================================================================================
// Retorno - Erro
// ================================================================================================

/**
 * @apiDefine SerieRetornoErroValidacao
 *
 * @apiError (Error 400 - Validação)  param Nome do parâmetro com erro.
 * @apiError (Error 400 - Validação)  msg Descrição do erro.
 * @apiError (Error 400 - Validação)  [value] Valor do parâmetro com erro.
 *
 * @apiErrorExample {json} ErroValidação:
 *     HTTP/1.1 400 Bad Request
 *     [{
 *       "param": "sinalizador",
 *       "msg": "O sinalizador é obrigatório e precisa ser entre 0 e 2",
 *       "value": "3"
 *     }]
 *
 *     HTTP/1.1 400 Bad Request
 *     [{
 *       "param": "nome",
 *       "msg": "O nome é obrigatório"
 *     }]
*/

/**
 * @apiDefine SerieRetornoErro
 *
 * @apiError  (Error 404) SerieNaoEncontradA O ID da série não foi encontrado.
 *
 * @apiErrorExample {json} FilmeNaoEncontrado:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "FilmeNaoEncontrado"
 *     }
*/
