const vendedorModels = require('../models/vendedorModels')

const procurarVendedor = async (req , res) => {
    const {id} = req.params
    const vendedor = await vendedorModels.procurarVendedor(id)
    return res.status(200).json(vendedor)
}

module.exports = {
    procurarVendedor
}