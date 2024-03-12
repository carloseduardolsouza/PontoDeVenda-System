import "./gerenciarFuncionarios.css"
import CardFuncionarios from "../../components/cardFuncionarios/cardFuncionarios"
import fetchapi from "../../api/fetchapi"
import { useState , useEffect } from "react";
import Loading from "../../components/AçãoRealizada/AçãoRealizada"
import { FaSearch } from "react-icons/fa";

function GerenciarFuncionarios() {
    const [respostVendedores , setRespostVendedores] = useState([])
    const [loadingFuncionarios , setLoadingFuncionarios] = useState(true)

    useEffect(() => {
        fetchapi.ProcurarVendores('all').then((response) => {
            setRespostVendedores(response)
            setLoadingFuncionarios(false)
        })
    },[])
    return ( 
        <div id="gerenciarFuncionarios">
            <h2>Funcionarios</h2>
            <form>
                    <button className="AddCliente" type="button">+</button>
                    <input type="text"  className="InputClientes" placeholder="Procurar Cliente..."/>
                    <button className="Search" type="submit"><FaSearch /></button>
                </form>
            {loadingFuncionarios && <Loading/> ||
            <main className="mainGerenciarFuncionarios">
                {respostVendedores.map((vendedor) => <CardFuncionarios data={vendedor}/>)}
            </main>
            }       
        </div>
     );
}

export default GerenciarFuncionarios;