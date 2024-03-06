const connection = require('./connection')

const procurarVendedor = async (id) => {
    if(id === "all") {
        const query = `SELECT * FROM vendedores`
        const [users] = await connection.execute(query)
        return users
    } else {
        const query = `SELECT * FROM vendedores WHERE id = ${id}`
        const [users] = await connection.execute(query)
        return users
    }
}

module.exports = {
    procurarVendedor
}