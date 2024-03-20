import "./VencidasContasPagar.css"
import TrContasPagar from "../trContasPagar/trContasPagar"

function VencidasContasPagar() {
    return ( 
        <div>
            <table className="tableTodasContasPagar">
                <thead>
                    <tr>
                        <th>Vencimento</th>
                        <th>Valor</th>
                        <th>Referente a</th>
                        <th>Status</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <TrContasPagar/>
                </tbody>
            </table>
        </div>
     );
}

export default VencidasContasPagar;