const connection = require('./connection')

const fs = require('fs');

const novoProduto = async (dados , imagens) => {
    const {
        produto,
        preçocompra,
        margem,
        preçovenda,
        emestoque,
        descrição,
        marca,
        comição,
        defal,
        ipi
    } = dados

    const query = 'INSERT INTO produtos (produto , preçocompra , margem , preçovenda , emestoque , descrição , imagem , marca, comição, defal ,ipi) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
    const values = [produto , preçocompra , margem ,preçovenda, emestoque , descrição , imagens , marca, comição, defal ,ipi]

    const cadastrarClientes = await connection.execute(query , values)
}

const procurarProdutos = async (id) => {
    if(id === "all") {
        const query = `SELECT * FROM produtos`
        const [produto] = await connection.execute(query)
        return produto
    } else {
        const query = `SELECT * FROM produtos WHERE produto LIKE '%${id}%'`
        const [produto] = await connection.execute(query)
        return produto
    }
}

const procurarProdutosId = async (id) => {
    const query = `SELECT * FROM produtos WHERE id = ${id}`
    const [produto] = await connection.execute(query)
    return produto
}

module.exports = {
    novoProduto,
    procurarProdutos,
    procurarProdutosId
}