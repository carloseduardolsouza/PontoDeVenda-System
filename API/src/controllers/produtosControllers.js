const produtosModels = require('../models/produtosModels')

const path = require('path');
const fs = require('fs');
require('dotenv').config();

const novoProduto = async (req , res) => {
    const dados = JSON.parse(req.body.dados)
    const produtos = await produtosModels.novoProduto(dados , req.file.timestamp)

    return res.status(201).json(produtos)
}

const proverImagens = async (req, res) => {
    const { nomeImagem } = req.params;
    const imagePath = path.join(process.env.IMAGENS_PATH, 'upload', nomeImagem);
  
    try {
      // Verifica se o arquivo existe
      if (fs.existsSync(imagePath)) {
        // Define o tipo de conteúdo como imagem
        res.setHeader('Content-Type', 'image/jpeg');
  
        // Lê o arquivo e envia como resposta
        fs.createReadStream(imagePath).pipe(res);
      } else {
        res.status(404).json({ error: 'Imagem não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao prover imagem:', error);
      res.status(500).json({ error: 'Erro ao prover imagem' });
    }
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

const editarProduto = async (req , res) => {
    const {id} = req.params
    const editarCliente = await produtosModels.editarProduto(id , req.body)
    return res.status(200).json()
}

module.exports = {
    novoProduto,
    proverImagens,
    procurarProdutos,
    procurarProdutosId,
    editarProduto
}