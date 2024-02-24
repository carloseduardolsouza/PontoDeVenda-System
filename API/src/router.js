//criar as rotas da api
const express = require("express");

const router = express.Router();

const clientesControllers = require('./controllers/clientesControllers')
const produtosControllers = require('./controllers/produtosControllers')

router.post("/novoCliente" , clientesControllers.novoCliente)
router.get("/procurarCliente/:id" , clientesControllers.procurarCliente)
router.get("/procurarClienteId/:id" , clientesControllers.procurarClienteId)
router.delete("/deletarCliente/:id" , clientesControllers.deletarCliente)
router.put("/editarCliente/:id" , clientesControllers.editarCliente)

router.post("/novoProduto" , produtosControllers.novoProduto)
router.get("/procurarProdutos/:id" , produtosControllers.procurarProdutos)
router.get("/procurarProdutosId/:id" , produtosControllers.procurarProdutosId)

module.exports = router;