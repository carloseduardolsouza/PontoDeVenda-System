const connection = require('./connection')

const procurarVendaId = async (id) => {
    const query = `SELECT * FROM vendas WHERE id = ${id}`
    const [vendas] = await connection.execute(query)
    return vendas
}

const novaVenda = async (dados) => {
    const {
        date,
        id_cliente,
        id_produto,
        produto,
        preço,
        desconto,
        quantidade,
        pagamento,
        total,
        rastreio
    } = dados

    const query = 'INSERT INTO vendas (date , id_cliente , id_produto , produto , preço , desconto , quantidade , pagamento , total , rastreio) VALUES (?,?,?,?,?,?,?,?,?,?)'
    const values = [date , +id_cliente , +id_produto ,produto, +preço , +desconto , +quantidade , pagamento , +total , rastreio]

    const novaVenda = await connection.execute(query , values)
}

const procurarVenda = async () => {
    const query = `SELECT * FROM vendas`
    const [vendas] = await connection.execute(query)
    return vendas
}

const deletarVenda = async (id) => {
    const query = `DELETE FROM vendas WHERE id = ${id}`

    const deletarVenda = await connection.execute(query)
}

module.exports = {
    procurarVendaId,
    novaVenda,
    procurarVenda,
    deletarVenda
}