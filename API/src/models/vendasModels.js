const connection = require('./connection')

const procurarVendaId = async (id) => {
    const query = `SELECT * FROM vendas WHERE rastreio = ${id}`
    const [vendas] = await connection.execute(query)
    return vendas
}

const novaVenda = async (dados) => {
    const {
        date,
        status,
        id_cliente,
        id_produto,
        id_vendedor,
        produto,
        preço,
        preço_und,
        desconto,
        quantidade,
        pagamento,
        total,
        rastreio
    } = dados

    const sherComição = await connection.execute(`SELECT comição FROM produtos WHERE id = ${id_produto}`)
    const sherVendedor = await connection.execute(`SELECT comições , nvendas FROM vendedores WHERE id = ${id_vendedor}`)

    const comição = +sherComição[0][0].comição
    const comiçõesExist = +sherVendedor[0][0].comições
    const NVendas = +sherVendedor[0][0].nvendas
    const calculo = (comição / 100) * preço_und

    var NVenda = NVendas
    NVenda += 1

    var response = comiçõesExist
    response += (calculo * quantidade)

    const insetComição = await connection.execute(`UPDATE vendedores SET comições = ${response.toFixed(2)} , nvendas = ${NVenda} WHERE id = ${id_vendedor}`)
    const query = 'INSERT INTO vendas (status , id_vendedor , preço_und , date , id_cliente , id_produto , produto , preço , desconto , quantidade , pagamento , total , rastreio) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)'
    const values = [status , id_vendedor , preço_und , date , +id_cliente , +id_produto ,produto, +preço , desconto , +quantidade , pagamento , +total , rastreio]

    const novaVenda = await connection.execute(query , values)
}

const procurarVenda = async () => {
    const query = `SELECT * FROM vendas`
    const [vendas] = await connection.execute(query)
    return vendas.reverse()
}

const procurarVendaPendente = async () => {
    const query = `SELECT * FROM vendas WHERE status <> 'concluida'`
    const [vendas] = await connection.execute(query)
    return vendas.reverse()
}

const procurarVendaCliente = async (id) => {
    const query = `SELECT * FROM vendas WHERE id_cliente = ${id}`
    const [procurarVendaCliente] = await connection.execute(query)
    return procurarVendaCliente
}

const deletarVenda = async (id) => {
    const query = `DELETE FROM vendas WHERE rastreio = ${id}`

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

const concluirVenda = async (id) => {
    const query = 'UPDATE vendas SET status = ? WHERE id = ?'
    const [concluirVenda] = await connection.execute(query, ["concluida",id])
    return concluirVenda
}

module.exports = {
    procurarVendaId,
    novaVenda,
    procurarVenda,
    deletarVenda,
    procurarVendaCliente,
    editarVenda,
    procurarVendaPendente,
    concluirVenda
}