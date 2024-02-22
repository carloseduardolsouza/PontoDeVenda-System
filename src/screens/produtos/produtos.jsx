import ItensTableProdutos from "../../components/ItensTableProdutos/ItensTableProdutos";

import "./produtos.css"


import { FaSearch } from "react-icons/fa";

function Produtos() {
    const Data = new Date()
    const log = `${Data.getUTCDate()}/${Data.getUTCMonth() + 1}/${Data.getUTCFullYear()}`

    return ( 
        <div id="PRODUTOS">
            <header id="HeaderProduto">
                <h2>Produtos ({'3'})</h2>
                <p>{log}</p>
            </header>
            <article className="ArticleProduto">
                <form>
                    <button className="AddProduto" onClick={(e) => {
                        e.preventDefault()
                        window.location.href = "/cadastrarProduto"
                    }}>+</button>
                    <input type="text"  className="InputProduto" placeholder="Procurar Produto..."/>
                    <button className="Search"><FaSearch /></button>
                </form>
            </article>
            <table className="tableProdutos">
                <ItensTableProdutos/>
                <ItensTableProdutos/>
                <ItensTableProdutos/>
                <ItensTableProdutos/>
                <ItensTableProdutos/>
                <ItensTableProdutos/>
                <ItensTableProdutos/>
                <ItensTableProdutos/>
                <ItensTableProdutos/>
                <ItensTableProdutos/>
                <ItensTableProdutos/>
                <ItensTableProdutos/>
                <ItensTableProdutos/>
                <ItensTableProdutos/>
                <ItensTableProdutos/>
            </table>
        </div>
     );
}

export default Produtos;