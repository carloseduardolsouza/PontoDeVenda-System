const produtosModels = require('../models/produtosModels')

const novoProduto = async (req , res) => {
    const produtos = await produtosModels.novoProduto(req.body)
    return res.status(201).json(produtos)
}

const procurarProdutos = async (req, res) => {
    const {id} = req.params
    const produtos = await produtosModels.procurarProdutos(id)
    return res.status(200).json(produtos)
}

const procurarProdutosId = async (req, res) => {
    const {id} = req.params
    const produtos = await produtosModels.procurarProdutosId(id)
    return res.status(200).json(produtos)
}

module.exports = {
    novoProduto,
    procurarProdutos,
    procurarProdutosId
}