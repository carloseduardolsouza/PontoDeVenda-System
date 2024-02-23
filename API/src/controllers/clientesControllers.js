const clientesModels = require('../models/clientesModels')

const novoCliente = async (req , res) => {
    const clientes = await clientesModels.novoCliente(req.body)
    return res.status(201).json(clientes)
}

const procurarCliente = async (req, res) => {
    const {id} = req.params
    const clientes = await clientesModels.procurarCliente(id)
    return res.status(200).json(clientes)
}

const procurarClienteId = async (req, res) => {
    const {id} = req.params
    const clientes = await clientesModels.procurarClienteId(id)
    return res.status(200).json(clientes)
}

const deletarCliente = async (req , res) => {
    const {id} = req.params
    const deletarCliente = await clientesModels.deletarCliente(id)
    return res.status(200).json(deletarCliente)
}

const editarCliente = async (req , res) => {
    const {id} = req.params
    const editarCliente = await clientesModels.editarCliente(id , req.body)
    return res.status(200).json()
}



module.exports = {
    novoCliente,
    procurarCliente,
    procurarClienteId,
    deletarCliente,
    editarCliente
}