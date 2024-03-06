const connection = require('./connection')

const novoCliente = async (dados) => {
    const {
        nome,
        date_nascimento,
        genero,
        telefone,
        cpf,
        endereço,
        email,
        observação
    } = dados

    const query = 'INSERT INTO clientes (name , date_nascimento , genero , telefone , cpf , endereço , email , observação) VALUES (?,?,?,?,?,?,?,?)'
    const values = [nome , date_nascimento , genero ,telefone, cpf , endereço , email , observação]

    const cadastrarClientes = await connection.execute(query , values)
}

const procurarCliente = async (id) => {
    if(id === "all") {
        const query = `SELECT * FROM clientes`
        const [users] = await connection.execute(query)
        return users.reverse()
    } else {
        const query = `SELECT * FROM clientes WHERE name LIKE '%${id}%'`
        const [users] = await connection.execute(query)
        return users
    }
}

const procurarClienteId = async (id) => {
    const query = `SELECT * FROM clientes WHERE id = ${id}`
    const [users] = await connection.execute(query)
    return users
}

const deletarCliente = async (id) => {
    const query = `DELETE FROM clientes WHERE id = ${id}`

    const deletarCliente = await connection.execute(query)
}

const editarCliente = async (id , dados) => {
    const {
        nome,
        date_nascimento,
        genero,
        telefone,
        cpf,
        endereço,
        email,
        observação 
    } = dados

    const query = 'UPDATE clientes SET name = ?, date_nascimento = ?, genero = ?, telefone = ?, cpf = ? ,endereço = ? ,email =? ,observação = ?   WHERE id = ?';

    const [editarCliente] = await connection.execute(query, [nome, date_nascimento, genero , telefone, cpf,endereço,email,observação, id]); 
    
    return editarCliente;
    
}

module.exports = {
    novoCliente,
    procurarCliente,
    procurarClienteId,
    deletarCliente,
    editarCliente
}