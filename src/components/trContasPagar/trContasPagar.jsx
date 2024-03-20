import "./trContasPagar.css"

function TrContasPagar() {
    return ( 
        <tr>
            <td>10/10/2005</td>
            <td>R$ 200,00</td>
            <td>Salario Funcionario</td>
            <td>Não Paga</td>
            <td><button className="PagarContas">Ação</button></td>
        </tr>
     );
}

export default TrContasPagar;