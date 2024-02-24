import IntensEstoque from "../../components/IntensEstoque/IntensEstoque";

import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";

import "./estoque.css"

function estoque() {
    return ( 
        <div id="ESTOQUE">
            <h2>Estoque</h2>
            <div>
            <form>
                    <button href="#" className="AddEstoque" onClick={(e) => {
                        e.preventDefault()
                        window.location.href = "/gerenciarEstoque"
                    }}><HiOutlineHomeModern /></button>
                    <input type="text"  className="InputClientes" placeholder="Procurar no Estoque..."/>
                    <button className="Search" type="submit"><FaSearch /></button>
                </form>
            </div>
            <table className="TableEstoque">
                <div className="TableHeader">
                    <p className="itemTabelTitle">Produto</p>
                    <p className="itemTabelTitle">Preço de compra</p>
                    <p className="itemTabelTitle">Margem</p>
                    <p className="itemTabelTitle">Em estoque</p>
                    <p className="itemTabelTitle">Codigo</p>
                </div>
                <IntensEstoque/>
                <IntensEstoque/>
                <IntensEstoque/>
            </table>
        </div>
     );
}

export default estoque;