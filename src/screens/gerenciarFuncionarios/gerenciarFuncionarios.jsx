import "./gerenciarFuncionarios.css"
import CardFuncionarios from "../../components/cardFuncionarios/cardFuncionarios"
import fetchapi from "../../api/fetchapi"
import { useState , useEffect } from "react";
import Loading from "../../components/AçãoRealizada/AçãoRealizada"

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
            {loadingFuncionarios && <Loading/> ||
            <main className="mainGerenciarFuncionarios">
                {respostVendedores.map((vendedor) => <CardFuncionarios data={vendedor}/>)}
            </main>
            }       
        </div>
     );
}

export default GerenciarFuncionarios;