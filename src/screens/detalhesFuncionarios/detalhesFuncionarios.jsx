import InfoFuncionario from "../../components/InfoFuncionario/InfoFuncionario";
import "./detalhesFuncionarios.css"

function detalhesFuncionarios() {
    return ( 
        <div id="detalhesFuncionarios">
            <h2>Detalhes Funcionarios</h2>
            <header>
                <p>Funcionario</p>
                <p>Detalhes</p>
                <p>Vendas</p>
            </header>
            <InfoFuncionario/>
        </div>
     );
}

export default detalhesFuncionarios;