//criar as rotas da api
const express = require("express");

const router = express.Router();

const clientesControllers = require('./controllers/clientesControllers')

router.get("/procurarCliente/:id" , clientesControllers.procurarCliente)
router.get("/procurarClienteId/:id" , clientesControllers.procurarClienteId)
router.post("/novoCliente" , clientesControllers.novoCliente)
router.delete("/deletarCliente/:id" , clientesControllers.deletarCliente)
router.put("/editarCliente/:id" , clientesControllers.editarCliente)

module.exports = router;