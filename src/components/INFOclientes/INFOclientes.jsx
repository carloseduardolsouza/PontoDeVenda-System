import "./INFOclientes.css"

import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import ImageUser from "../../assets/user.jpg"

function INFOclientes() {
    return ( 
        <div id="DetalhesClienteINFORMAÇÃO">
            <div className="DivisãoDetalhesCliente">
                <img src={ImageUser} alt="Usuario" className="ImageUserDetalhesCliente"/>
                <h2>{"Carlos Eduardo"}</h2>
                <p>{"R$ 2.000,00"}</p>
                <button className="bttContaCliente">Conta do Cliente</button>
            </div>
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
                    <button className="bttEditarClienteInfo"><FaEdit /> Editar</button>
                    <button className="bttDeleteClienteInfo"><MdDeleteOutline /> Excluir Cliente</button>
            </div>
        </div>
     );
}

export default INFOclientes;