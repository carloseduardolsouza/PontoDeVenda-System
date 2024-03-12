import CardFornecedores from "../../components/CardFornecedores/CardFornecedores";
import "./fornecedores.css"
import { FaSearch } from "react-icons/fa";

function fornecedores() {
    return ( 
        <div id="fornecedores">
            <h2>Fornecedores</h2>
            <form>
                <button className="AddCliente" type="button">+</button>
                <input type="text"  className="InputClientes" placeholder="Procurar Fornecedor..."/>
                <button className="Search" type="submit"><FaSearch /></button>
            </form>
            <div className="AreaCardFornecedores">
                <CardFornecedores/>
                <CardFornecedores/>
                <CardFornecedores/>
                <CardFornecedores/>
                <CardFornecedores/>
                <CardFornecedores/>
                <CardFornecedores/>
                <CardFornecedores/>
                <CardFornecedores/>
            </div>
        </div>
     );
}

export default fornecedores;