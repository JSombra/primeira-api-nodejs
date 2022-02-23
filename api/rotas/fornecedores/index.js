const roteador = require('express').Router()
const TabelaForncedor = require('./TabelaFornecedor')

const ModeloTabela = require('./ModeloTabelaFornecedores')
roteador.use('/', async (req, res) => {
    const resultados = await TabelaForncedor.listar()
    res.send(JSON.stringify(resultados))
})

module.exports = roteador;