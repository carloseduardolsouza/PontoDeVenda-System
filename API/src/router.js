//criar as rotas da api
const express = require("express");
const multer = require("multer");
const {storage} = require("./multerConfig")

const upload = multer({storage: storage})

const router = express.Router();

const clientesControllers = require('./controllers/clientesControllers')
const produtosControllers = require('./controllers/produtosControllers');
const vendasControllers = require('./controllers/vendasControllers')

router.post("/novoCliente" , clientesControllers.novoCliente)
router.get("/procurarCliente/:id" , clientesControllers.procurarCliente)
router.get("/procurarClienteId/:id" , clientesControllers.procurarClienteId)
router.delete("/deletarCliente/:id" , clientesControllers.deletarCliente)
router.put("/editarCliente/:id" , clientesControllers.editarCliente)

router.get('/imagens/:nomeImagem', produtosControllers.proverImagens);

router.post("/novoProduto" , upload.array('image') , produtosControllers.novoProduto)
router.get("/procurarProdutos/:id" , produtosControllers.procurarProdutos)
router.get("/procurarProdutosId/:id" , produtosControllers.procurarProdutosId)
router.put("/editarProduto/:id" , produtosControllers.editarProduto)
router.delete("/deletarProduto/:id" , produtosControllers.deletarProduto)

router.get("/procurarVendaId/:id" , vendasControllers.procurarVendaId)
router.get("/procurarVenda" , vendasControllers.procurarVenda)
router.post("/novaVenda" , vendasControllers.novaVenda)
router.delete("/deletarVenda/:id" , vendasControllers.deletarVenda)

module.exports = router;