import "./NovoFuncionario.css"
import { useState } from "react";
import fetchapi from "../../api/fetchapi";
import Concluindo from "../../components/Concluindo/Concluindo"

function NovoFuncionario() {
    const [nome , setNome] = useState("")
    const [cpf , setCpf] = useState("")
    const [numero , setNumero] = useState("")
    const [contratação , setContratação] = useState("")
    const [cargo , setCargo] = useState("")
    const [email , setEmail] = useState("")

    const [concluido ,setConcluindo] = useState(false)

    const LançarFuncionario = (e) => {
        e.preventDefault()
        if(nome == "" || nome == undefined || nome == null) {
            setNome("desconhecido")
        }
        if(cpf == "" || cpf == undefined || cpf == null) {
            setCpf("desconhecido")
        }
        if(numero == "" || numero == undefined || numero == null) {
            setNumero("desconhecido")
        }
        if(cargo == "" || cargo == undefined || cargo == null) {
            setCargo("desconhecido")
        }
        if(contratação == "" || contratação == undefined || contratação == null) {
            setContratação("desconhecido")
        }
        if(email == "" || email == undefined || email == null) {
            setEmail("desconhecido")
        }

        const dados = {
            "nome" : nome,
            "cpf" : cpf,
            "numero" : numero,
            "cargo" : cargo,
            "email" : email,
            "contratação" : contratação
        }
        setConcluindo(true)
        //fetchapi.NovoFuncionario(dados)

        setCargo('')
        setContratação('')
        setCpf('')
        setNome('')
        setNumero('')
        setEmail('')

        setTimeout(() => {
            setConcluindo(false);
        }, 1500)
    }

    const escreverDados = (param , e) => {
        if(param == "nome") {
            setNome(e.target.value)
        }

        if(param == "numero") {
            setNumero(e.target.value)
        }

        if(param == "email") {
            setEmail(e.target.value)
        }

        if(param == "cpf") {
            setCpf(e.target.value)
        }

        if(param == "contratação") {
            setContratação(e.target.value)
        }

        if(param == "cargo") {
            setCargo(e.target.value)
        }

    }

    return ( 
        <div id="NovoFuncionario">
            <h2>Novo Funcionario</h2>
            <div className="MainNewFuncionario">

                <div className="NomeCpfFuncionario">
                    <label className="LabelInfoFuncionario">
                        <strong>Nome</strong>
                        <input type="text" value={nome} onChange={(event) => escreverDados('nome' , event)}/>
                    </label>

                    <label className="LabelInfoFuncionario">
                        <strong>CPF</strong>
                        <input type="number" value={cpf} onChange={(event) => escreverDados('cpf' , event)}/>
                    </label>
                </div>
                    
                <label className="LabelInfoFuncionario">
                    <strong>Numero</strong>
                    <input type="number" value={numero} onChange={(event) => escreverDados('numero' , event)}/>
                </label>

                <label className="LabelInfoFuncionario">
                    <strong>Contratação</strong>
                    <input type="date" value={contratação} onChange={(event) => escreverDados('contratação' , event)}/>
                </label>

                <label className="LabelInfoFuncionario">
                    <strong>Cargo</strong>
                    <select className="SelectNovoFuncionario">
                        <option value="Vendedor">Vendedor</option>
                    </select>
                </label>

                <label className="LabelInfoFuncionario">
                    <strong>Email</strong>
                    <input type="email" value={email} onChange={(event) => escreverDados('email' , event)}/>
                </label>
                <button id="LançarFuncionario" onClick={LançarFuncionario}>Lançar Contratação</button>
            </div>
            {concluido && <Concluindo/>}
        </div>
     );
}

export default NovoFuncionario;