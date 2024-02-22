import { FaSearch } from "react-icons/fa";

import "./clientes.css"

import ItensClientes from "../../components/ItensClientes/ItensClientes"

function clientes() {
    const Data = new Date()
    const log = `${Data.getUTCDate()}/${Data.getUTCMonth() + 1}/${Data.getUTCFullYear()}`

    return ( 
        <div id="CLIENTE">
            <header id="HeaderClientes">
                <h2>Clientes ({'3'})</h2>
                <p>{log}</p>
            </header>
            <article className="ArticleClientes">
                <form>
                    <button href="#" className="AddCliente" onClick={(e) => {
                        e.preventDefault()
                        window.location.href = "http://localhost:3000/novoCliente"
                    }}>+</button>
                    <input type="text"  className="InputClientes" placeholder="Procurar Cliente..."/>
                    <button className="Search"><FaSearch /></button>
                </form>
            </article>
            <table className="tableClientes">
                <div className="HeaderClientes">
                    <p className="HeaderClientesP"><strong>Nome</strong></p>
                    <p className="HeaderClientesP"><strong>Numero</strong></p>
                    <p className="HeaderClientesP"><strong>Endereço</strong></p>
                    <p className="HeaderClientesP"><strong>Credito</strong></p>
                    <p className="HeaderClientesP açoes"><strong>Ações</strong></p>
                </div>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
                <ItensClientes/>
            </table>
        </div>
    );
}

export default clientes;