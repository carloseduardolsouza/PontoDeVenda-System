import "./INFOclientes.css"

import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import ImageUser from "../../assets/user.jpg"

import { useState } from "react";

function INFOclientes() {
    const [editar , setEditar] = useState(false)
    return ( 
            <div id="DetalhesClienteINFORMAÇÃO">
            <div className="DivisãoDetalhesCliente">
                <img src={ImageUser} alt="Usuario" className="ImageUserDetalhesCliente"/>
                <h2>{"Carlos Eduardo"}</h2>
                <p>{"R$ 2.000,00"}</p>
                <button className="bttContaCliente">Conta do Cliente</button>
            </div>
            {editar && (
                <div className="alinhar">
                <p className="DetalhesClientesP"><strong>Codigo: </strong>{"00"}</p>
                <label>
                    <p className="DetalhesClientesP"><strong>Nome: </strong></p>
                    <input type="text" value={"Carlos Eduardo Souza"}/>
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Nascimento: </strong></p>
                    <input type="date" />   
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Genero: </strong></p>
                    <select>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Telefone: </strong></p>
                    <input type="number" />   
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>CPF: </strong></p>
                    <input type="number"/>  
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Endereço: </strong></p>
                    <input type="text" />    
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Email: </strong></p>
                    <input type="email"/>    
                </label>

                <label>
                    <p className="DetalhesClientesP"><strong>Observação: </strong></p>
                    <textarea  id="texto" rows="4" cols="58"/> 
                </label>
                <button className="bttEditarClienteInfo" onClick={() => setEditar(false)}><FaCheckCircle /> Concluir</button>
        </div>
            ) || (
                <div className="alinhar">
                    <p className="DetalhesClientesP"><strong>Codigo: </strong>{"00"}</p>
                    <p className="DetalhesClientesP"><strong>Nome: </strong>{"Carlos Eduardo Souza"}</p>
                    <p className="DetalhesClientesP"><strong>Nascimento: </strong>{"10/10/2005"}</p>
                    <p className="DetalhesClientesP"><strong>Genero: </strong>{"Masculino"}</p>
                    <p className="DetalhesClientesP"><strong>Telefone: </strong>{"(62) 9 9336-2090"}</p>
                    <p className="DetalhesClientesP"><strong>CPF: </strong>{"712-478-141.81"}</p>
                    <p className="DetalhesClientesP"><strong>Endereço: </strong>{"R.2 , Qd.2 , Lt.13 Jardim Petrópolis"}</p>
                    <p className="DetalhesClientesP"><strong>Email: </strong>{"carlosreiroyale@gmail.com"}</p>
                    <p className="DetalhesClientesP"><strong>Observação: </strong>{"*********"}</p>
                    <button className="bttEditarClienteInfo" onClick={() => setEditar(true)}><FaEdit /> Editar</button>
                    <button className="bttDeleteClienteInfo"><MdDeleteOutline /> Excluir Cliente</button>
            </div>
            )}
        </div>
     );
}

export default INFOclientes;