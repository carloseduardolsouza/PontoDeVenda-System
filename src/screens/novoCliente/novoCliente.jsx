import "./novoCliente.css"

import ImageUser from "../../assets/user.jpg"

import NovoClienteApi from "../../api/fetchapi"

import { useState } from "react"

function NovoCliente() {
    const [nome ,setNome] = useState()
    const [numero ,setNumero] = useState()
    const [endereço ,setEndereço] = useState('desconhecido')
    const [cpf ,setCpf] = useState(10000000000)
    const [email ,setEmail] = useState('desconhecido@gmail.com')
    const [genero ,setGenero] = useState('Selecione o Genero')
    const [nascimento ,setNascimento] = useState('1000-10-10')

    const dados = {
        "nome" : nome,
        "date_nascimento" : nascimento,
        "genero" : genero,
        "telefone" : numero,
        "cpf" : cpf,
        "endereço" : endereço,
        "email" : email,
        "observação" : "***"
    }

    const Data = new Date()
    const log = `${Data.getUTCDate()}/${Data.getUTCMonth() + 1}/${Data.getUTCFullYear()}`

    const escreverDados = (param , e) => {
        if(param == "nome") {
            setNome(e.target.value)
        }

        if(param == "numero") {
            setNumero(e.target.value)
        }

        if(param == "Endereço") {
            setEndereço(e.target.value)
        }

        if(param == "CPF") {
            setCpf(e.target.value)
        }

        if(param == "Email") {
            setEmail(e.target.value)
        }

        if(param == "Gênero") {
            setGenero(e.target.value)
        }

        if(param == "Nascimento") {
            setNascimento(e.target.value)
        }
    }

    return ( 
    <div id="novoCliente">
        <h2>Novo Cliente</h2>
        <p>{log}</p>
        <div id="CENTRALIZAR">

        <main className="MainNovoCliente">
        <img src={ImageUser} alt="Imagem User" className="ImageUser" />
        <article className="articleNovoCliente">
            <p><strong>Nome: </strong></p>
            <input type="text" className="InputNovoCliente" onChange={(event) => escreverDados("nome" , event)} value={nome}/>
            <p><strong>Numero: </strong></p>
            <input type="number" className="InputNovoCliente" onChange={(event) => escreverDados("numero", event)} value={numero}/>
            <p><strong>Endereço</strong></p>
            <input type="text" className="InputNovoCliente" onChange={(event) => escreverDados("Endereço", event)} value={endereço}/>
            <p><strong>CPF</strong></p>
            <input type="number" className="InputNovoCliente" onChange={(event) => escreverDados("CPF", event)} value={cpf}/>
            <p><strong>Email</strong></p>
            <input type="text" className="InputNovoCliente" onChange={(event) => escreverDados("Email", event)} value={email}/>
            <p><strong>Gênero</strong></p>
            <select className="SelectNovoCliente" onChange={(event) => escreverDados("Gênero", event)} value={genero}>
                <option value="Selecione o Genero">Selecione o Genero</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
            </select>
            <p>Nascimento: </p>
            <input type="date" className="DataNovoCliente" onChange={(event) => escreverDados("Nascimento", event)} value={nascimento}/>
            <button className="CadastrarNovoCliente" onClick={() => {
                setCpf('10000000000')
                setEmail('desconhecido@gmail.com')
                setEndereço('desconhecido')
                setGenero('Selecione o Genero')
                setNascimento('1000-10-10')
                setNome('')
                setNumero('')
                NovoClienteApi.NovoCliente(dados)
            }}>Cadastrar</button>
        </article>
        </main>
        </div>
    </div>
    );
}

export default NovoCliente;