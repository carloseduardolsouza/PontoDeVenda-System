import "./INFOclientes.css"

import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import ImageUser from "../../assets/user.jpg";
import fetchapi from "../../api/fetchapi";
import Deletando from "../Deletando/Deletando";
import { useState } from "react";
import services from "../../services/services"
import Concluindo from "../Concluindo/Concluindo"

function INFOclientes({data}) {
    const {
        id,
        name,
        date_nascimento,
        endereço,
        observação,
        telefone,
        cpf,
        email,
        genero,

    } = data

    const [editar , setEditar] = useState(false)

    const [nome , setNome] = useState(name)
    const [nascimento , setNascimento] = useState(date_nascimento)
    const [género , setGenero] = useState(genero)
    const [telefones , setTelefones] = useState(telefone)
    const [cpfs , setCpfs] = useState(cpf)
    const [endereços , setEndereços] = useState(endereço)
    const [emails , setEmails] = useState(email)
    const [observações , setObservações] = useState(observação)

    const [deletando , setDeletando] = useState(false)
    const [concluindo , setConcluindo] = useState(false)

    const escrever = (p,e) => {
        if(p == "nome") {
            setNome(e.target.value)
        }
        if(p == "nascimento") {
            setNascimento(e.target.value)
        }
        if(p == "genero") {
            setGenero(e.target.value)
        }
        if(p == "telefone") {
            setTelefones(e.target.value)
        }
        if(p == "cpf") {
            setCpfs(e.target.value)
        }
        if(p == "endereço") {
            setEndereços(e.target.value)
        }
        if(p == "email") {
            setEmails(e.target.value)
        }
        if(p == "observação") {
            setObservações(e.target.value)
        }
    }

    const Deletarcliente = () => {
        setDeletando(true)
        fetchapi.DeletarCliente(id)

        setTimeout(() => {
            setDeletando(false);
        }, 1500)

        setTimeout(() => {
            window.location.href = "/clientes"
        }, 2000)
    }

    return ( 
            <div id="DetalhesClienteINFORMAÇÃO">
                {deletando && <Deletando/> }
                {concluindo && <Concluindo/>}
            <div className="DivisãoDetalhesCliente">
                <img src={ImageUser} alt="Usuario" className="ImageUserDetalhesCliente"/>
                <h2>{name}</h2>
                <p>{"R$ 2.000,00"}</p>
                <button className="bttContaCliente">Conta do Cliente</button>
            </div>
            {editar && (
                <div className="alinhar">
                <p className="DetalhesClientesP"><strong>Codigo: </strong>0{id}</p>
                <label>
                    <p className="DetalhesClientesP"><strong>Nome: </strong></p>
                    <input type="text" value={nome} onChange={(e) => escrever("nome",e)}/>
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Nascimento: </strong></p>
                    <input type="date" value={nascimento} onChange={(e) => escrever("nascimento", e )}/>   
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Genero: </strong></p>
                    <select value={género} onChange={(e) => escrever("genero", e)}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Telefone: </strong></p>
                    <input type="number" value={telefones} onChange={(e) => escrever("telefone",e)}/>   
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>CPF: </strong></p>
                    <input type="number" value={cpfs} onChange={(e) => escrever("cpf",e)}/>  
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Endereço: </strong></p>
                    <input type="text" value={endereços} onChange={(e) => escrever("endereço",e)}/>    
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Email: </strong></p>
                    <input type="email" value={emails} onChange={(e) => escrever("email",e)}/>    
                </label> 

                <label>
                    <p className="DetalhesClientesP"><strong>Observação: </strong></p>
                    <textarea  id="texto" rows="4" cols="58" value={observações} onChange={(e) => escrever("observação",e)}/>
                </label>
                <button className="bttEditarClienteInfo" onClick={() => {
                    const dados = {
                        "id": id,
                        "nome" : nome,
                        "date_nascimento" : nascimento,
                        "genero" : género,
                        "telefone" : telefones,
                        "cpf" : cpfs,
                        "endereço" : endereços,
                        "email" : emails,
                        "observação" : observações
                    }
                    setConcluindo(true)
                    fetchapi.AtualizarCliente(dados)
                    
                    setTimeout(() => {
                        setConcluindo(false);
                        window.location.reload()
                    }, 1500)
                    setEditar(false)
                }}><FaCheckCircle /> Concluir</button>
        </div>
            ) || (
                <div className="alinhar">
                    <p className="DetalhesClientesP"><strong>Codigo: </strong>0{id}</p>
                    <p className="DetalhesClientesP"><strong>Nome: </strong>{name}</p>
                    <p className="DetalhesClientesP"><strong>Nascimento: </strong>{services.formatarDataNascimento(date_nascimento)}</p>
                    <p className="DetalhesClientesP"><strong>Genero: </strong>{genero}</p>
                    <p className="DetalhesClientesP"><strong>Telefone: </strong>{services.formatarNumeroCelular(telefone)}</p>
                    <p className="DetalhesClientesP"><strong>CPF: </strong>{services.formatarCPF(cpf)}</p>
                    <p className="DetalhesClientesP"><strong>Endereço: </strong>{endereço}</p>
                    <p className="DetalhesClientesP"><strong>Email: </strong>{email}</p>
                    <p className="DetalhesClientesP"><strong>Observação: </strong>{observação}</p>
                    <button className="bttEditarClienteInfo" onClick={() => setEditar(true)}><FaEdit /> Editar</button>
                    <button className="bttDeleteClienteInfo" onClick={() => Deletarcliente()}><MdDeleteOutline/> Excluir Cliente</button>
            </div>
            )}
        </div>
     );
}

export default INFOclientes;