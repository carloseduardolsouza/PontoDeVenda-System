import "./detalhesVendas.css"

import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

function detalhesVendas() {
    return ( 
        <div id="detalhesVenda">
            <h2>Detalhes Venda</h2>
            <div className="detalhesVendaInfoCliente">
                <p><strong>data: </strong>{"10/10/2005"}</p>
                <p><strong>cliente: </strong>{"Carlos Souza"}</p>
                <p><strong>status: </strong>{"Concluida"}</p>
                <p><strong>vendedor(a): </strong>{"Marcia"}</p>
            </div>
            <div className="detalhesVendaAreaButton">
                <button className="detalhesVendaButton NFE-sVenda"><LiaFileInvoiceDollarSolid /> NFE-s</button>
                <button className="detalhesVendaButton EditarVenda"><FaEdit/> Editar</button>
                <button className="detalhesVendaButton DeletarVenda"><MdDeleteOutline/> Deletar Venda</button>
            </div>
            <div className="displayflexdetalhesVenda">
                <div>
                    <div className="InfoVenda">
                        <p><strong>Produto: </strong>{"Guarda Roupa Lima"}</p>
                        <p><strong>valor: </strong>{"R$ 300,00"}</p>
                        <p><strong>desconto: </strong>{"R$ 10,00"}</p>
                        <p><strong>quantidade: </strong>{"1"}</p>
                        <h3>total: {"R$ 290,00"}</h3>
                    </div>
                    
                </div>
                <div>
                    <div className="infosdetalhesVenda">
                        <p><strong>parcela: </strong>{"1/1"}</p>
                        <p><strong>Pagamento: </strong>{"Dinheiro"}</p>
                        <p><strong>Juros: </strong>{"R$ 00,00"}</p>
                        <h2>Total: {"R$ 300,00"}</h2>
                    </div>
                </div>
            </div>
            
        </div>
     );
}

export default detalhesVendas;