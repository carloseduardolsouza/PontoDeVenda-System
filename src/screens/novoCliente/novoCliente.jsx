import "./novoCliente.css"

import ImageUser from "../../assets/user.jpg"

function novoCliente() {
    const Data = new Date()
    const log = `${Data.getUTCDate()}/${Data.getUTCMonth() + 1}/${Data.getUTCFullYear()}`
    return ( 
    <div id="novoCliente">
        <h2>Novo Cliente</h2>
        <p>{log}</p>
        <div id="CENTRALIZAR">

        <main className="MainNovoCliente">
        <img src={ImageUser} alt="Imagem User" className="ImageUser" />
        <article className="articleNovoCliente">
            <p><strong>Nome: </strong></p>
            <input type="text" className="InputNovoCliente"/>
            <p><strong>Numero: </strong></p>
            <input type="number" className="InputNovoCliente"/>
            <p><strong>Endereço</strong></p>
            <input type="text" className="InputNovoCliente"/>
            <p><strong>Gênero</strong></p>
            <select className="SelectNovoCliente">
                <option value="Selecione o Genero">Selecione o Genero</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
            </select>
            <p>Nascimento: </p>
            <input type="date" className="DataNovoCliente"/>
            <button className="CadastrarNovoCliente">Cadastrar</button>
        </article>
        </main>
        </div>
    </div>
    );
}

export default novoCliente;