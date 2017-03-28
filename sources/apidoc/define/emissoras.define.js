
// ================================================================================================
// Requisicao - Body
// ================================================================================================

/**
 * @apiDefine EmissoraRequisicaoBody
 *
 * @apiParam (Body) {String} nome Nome da emissora.
*/


// ================================================================================================
// Retorno - Sucesso
// ================================================================================================

/**
 * @apiDefine EmissoraRetornoSucesso
 *
 * @apiSuccess {String} _id ID da emissora.
 * @apiSuccess {String} nome Nome da emissora.
 * @apiSuccess {String} dt_criacao Data de criação (ISO 8601).
*/


// ================================================================================================
// Retorno - Erro
// ================================================================================================

/**
 * @apiDefine EmissoraRetornoErroValidacao
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
 * @apiDefine EmissoraRetornoErro
 *
 * @apiError  (Error 404) EmissoraNaoEncontrada O ID da emissora não foi encontrado.
 *
 * @apiErrorExample {json} EmissoraNaoEncontrada:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "EmissoraNaoEncontrada"
 *     }
*/
