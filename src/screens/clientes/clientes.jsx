import { FaSearch } from "react-icons/fa";

import { useEffect , useState } from "react";

import "./clientes.css"

import ItensClientes from "../../components/ItensClientes/ItensClientes"
import Loading from "../../components/AçãoRealizada/AçãoRealizada"

import ProcurarClientesApi from "../../api/fetchapi"

function Clientes() {
    const Data = new Date()
    const log = `${Data.getUTCDate()}/${Data.getUTCMonth() + 1}/${Data.getUTCFullYear()}`

    const [resultClientes , setResultClientes] = useState([])
    const [loadingClientes , setloadingClientes] = useState(true)
    const [pesquisar , setPesquisar] = useState('all')

    useEffect(() => {
        ProcurarClientesApi.ProcurarCliente(pesquisar).then((response) => {
            setResultClientes(response)
            setloadingClientes(false)
        })
    }, [])

    const renderClientes = async (e) => {
        e.preventDefault()
        setloadingClientes(true)
        const client = await ProcurarClientesApi.ProcurarCliente(pesquisar)
        setloadingClientes(false)
        setResultClientes(client)
    }

    return ( 
        <div id="CLIENTE">
            <header id="HeaderClientes">
                <h2>Clientes ({resultClientes.length})</h2>
                <p>{log}</p>
            </header>
            <article className="ArticleClientes">
                <form onSubmit={(e) => renderClientes(e)}>
                    <button className="AddCliente" type="button" onClick={(e) => {
                        e.preventDefault()
                        window.location.href = "/novoCliente"
                    }}>+</button>
                    <input type="text"  className="InputClientes" placeholder="Procurar Cliente..." onChange={(e) => setPesquisar(e.target.value)}/>
                    <button className="Search" type="submit"><FaSearch /></button>
                </form>
            </article>
            <table className="tableClientes">
                <div className="HeaderClientes">
                    <p className="HeaderClientesP"><strong>Nome</strong></p>
                    <p className="HeaderClientesP"><strong>Numero</strong></p>
                    <p className="HeaderClientesP endereçoHeader"><strong>Endereço</strong></p>
                    <p className="HeaderClientesP"><strong>Credito</strong></p>
                    <p className="HeaderClientesP açoes"><strong>Ações</strong></p>
                </div>
                {loadingClientes && <Loading/> || (
                    resultClientes.map((clientes) => <ItensClientes data={clientes}/>)
                )}
            </table>
        </div>
    );
}

export default Clientes;