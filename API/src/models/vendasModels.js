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
        preço_und,
        desconto,
        quantidade,
        pagamento,
        total,
        rastreio
    } = dados

    const query = 'INSERT INTO vendas (preço_und , date , id_cliente , id_produto , produto , preço , desconto , quantidade , pagamento , total , rastreio) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
    const values = [preço_und , date , +id_cliente , +id_produto ,produto, +preço , +desconto , +quantidade , pagamento , +total , rastreio]

    const novaVenda = await connection.execute(query , values)
}

const procurarVenda = async () => {
    const query = `SELECT * FROM vendas`
    const [vendas] = await connection.execute(query)
    return vendas
}

const procurarVendaCliente = async (id) => {
    const query = `SELECT * FROM vendas WHERE id_cliente = ${id}`
    const [procurarVendaCliente] = await connection.execute(query)
    return procurarVendaCliente
}

const deletarVenda = async (id) => {
    const query = `DELETE FROM vendas WHERE id = ${id}`

    const deletarVenda = await connection.execute(query)
}

const editarVenda = async (id , dados) => {
    const {
        date,
        id_cliente,
        id_produto,
        produto,
        preço,
        preço_und,
        desconto,
        quantidade,
        pagamento,
        total,
        rastreio
    } = dados

    const query = 'UPDATE vendas SET date = ?, id_cliente = ?, id_produto = ?, produto = ?, preço = ? ,preço_und = ? ,desconto =? ,quantidade = ? , pagamento = ? , total = ? , rastreio = ?    WHERE id = ?';

    const [editarVenda] = await connection.execute(query, [preço_und , date , +id_cliente , +id_produto ,produto, +preço , +desconto , +quantidade , pagamento , +total , rastreio , id]); 
    
    return editarVenda;
}

module.exports = {
    procurarVendaId,
    novaVenda,
    procurarVenda,
    deletarVenda,
    procurarVendaCliente,
    editarVenda
}