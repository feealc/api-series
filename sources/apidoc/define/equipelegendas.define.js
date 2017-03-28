
// ================================================================================================
// Requisicao - Body
// ================================================================================================

/**
 * @apiDefine EquipeLegendaRequisicaoBody
 *
 * @apiParam (Body) {String} nome Nome da equipe de legenda.
*/


// ================================================================================================
// Retorno - Sucesso
// ================================================================================================

/**
 * @apiDefine EquipeLegendaRetornoSucesso
 *
 * @apiSuccess {String} _id ID da equipe de legenda.
 * @apiSuccess {String} nome Nome da equipe de legenda.
 * @apiSuccess {String} dt_criacao Data de criação (ISO 8601).
*/


// ================================================================================================
// Retorno - Erro
// ================================================================================================

/**
 * @apiDefine EquipeLegendaRetornoErroValidacao
 *
 * @apiError (Error 400 - Validação)  param Nome do parâmetro com erro.
 * @apiError (Error 400 - Validação)  msg Descrição do erro.
 * @apiError (Error 400 - Validação)  [value] Valor do parâmetro com erro.
 *
 * @apiErrorExample {json} ErroValidação:
 *     HTTP/1.1 400 Bad Request
 *     [{
 *       "param": "nome",
 *       "msg": "O nome é obrigatório"
 *     }]
*/

/**
 * @apiDefine EquipeLegendaRetornoErro
 *
 * @apiError  (Error 404) EquipeLegendaNaoEncontrada O ID da equipe de legenda não foi encontrado.
 *
 * @apiErrorExample {json} EquipeLegendaNaoEncontrada:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "EquipeLegendaNaoEncontrada"
 *     }
*/
