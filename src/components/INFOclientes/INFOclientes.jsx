import "./INFOclientes.css"

import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import ImageUser from "../../assets/user.jpg"

import fetchapi from "../../api/fetchapi";

import { useState } from "react";

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
    return ( 
            <div id="DetalhesClienteINFORMAÇÃO">
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
                    <input type="text" value={name}/>
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Nascimento: </strong></p>
                    <input type="date" value={date_nascimento}/>   
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Genero: </strong></p>
                    <select value={genero}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Telefone: </strong></p>
                    <input type="number" value={telefone}/>   
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>CPF: </strong></p>
                    <input type="number" value={cpf}/>  
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Endereço: </strong></p>
                    <input type="text" value={endereço}/>    
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Email: </strong></p>
                    <input type="email" value={email}/>    
                </label> 

                <label>
                    <p className="DetalhesClientesP"><strong>Observação: </strong></p>
                    <textarea  id="texto" rows="4" cols="58" value={observação}/>
                </label>
                <button className="bttEditarClienteInfo" onClick={() => setEditar(false)}><FaCheckCircle /> Concluir</button>
        </div>
            ) || (
                <div className="alinhar">
                    <p className="DetalhesClientesP"><strong>Codigo: </strong>0{id}</p>
                    <p className="DetalhesClientesP"><strong>Nome: </strong>{name}</p>
                    <p className="DetalhesClientesP"><strong>Nascimento: </strong>{date_nascimento}</p>
                    <p className="DetalhesClientesP"><strong>Genero: </strong>{genero}</p>
                    <p className="DetalhesClientesP"><strong>Telefone: </strong>{telefone}</p>
                    <p className="DetalhesClientesP"><strong>CPF: </strong>{cpf}</p>
                    <p className="DetalhesClientesP"><strong>Endereço: </strong>{endereço}</p>
                    <p className="DetalhesClientesP"><strong>Email: </strong>{email}</p>
                    <p className="DetalhesClientesP"><strong>Observação: </strong>{observação}</p>
                    <button className="bttEditarClienteInfo" onClick={() => setEditar(true)}><FaEdit /> Editar</button>
                    <button className="bttDeleteClienteInfo" onClick={() => {fetchapi.DeletarCliente(id)}}><MdDeleteOutline/> Excluir Cliente</button>
            </div>
            )}
        </div>
     );
}

export default INFOclientes;