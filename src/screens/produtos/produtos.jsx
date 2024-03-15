import ItensTableProdutos from "../../components/ItensTableProdutos/ItensTableProdutos";
import Loading from "../../components/AçãoRealizada/AçãoRealizada"

import "./produtos.css"

import { useState , useEffect } from "react";

import fetchapi from "../../api/fetchapi";

import { FaSearch } from "react-icons/fa";
import { Form } from "react-router-dom";

function Produtos() {
    const Data = new Date()
    const log = `${Data.getUTCDate()}/${Data.getUTCMonth() + 1}/${Data.getUTCFullYear()}`

    const [resultProdutos , setResultProdutos] = useState([])
    const [loadingProdutos , setloadingProdutos] = useState(true)
    const [pesquisar , setPesquisar] = useState('all')

    useEffect(() => {
        fetchapi.ProcurarProdutos(pesquisar).then((response) => {
            setResultProdutos(response)
            setloadingProdutos(false)
        })
    }, [])

    const renderClientes = async (e) => {
        e.preventDefault()
        setloadingProdutos(true)
        const client = await fetchapi.ProcurarProdutos(pesquisar)
        setloadingProdutos(false)
        setResultProdutos(client)
    }

    return ( 
        <div id="PRODUTOS">
            <header id="HeaderProduto">
                <h2>Produtos ({resultProdutos.length})</h2>
                <p>{log}</p>
            </header>
            <article className="ArticleProduto">
                <form onSubmit={(e) => renderClientes(e)}>
                    <input type="text"  className="InputProduto" placeholder="Procurar Produto..." onChange={(e) => setPesquisar(e.target.value)}/>
                    <button className="Search" type="submit"><FaSearch/></button>
                </form>
            </article>
            <table className="tableProdutos">
            {loadingProdutos && <Loading/> || (
                    resultProdutos.map((produtos) => <ItensTableProdutos data={produtos}/>)
                )}
            </table>
        </div>
     );
}

export default Produtos;