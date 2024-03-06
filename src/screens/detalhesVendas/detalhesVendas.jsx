import "./detalhesVendas.css"

import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { useParams } from "react-router-dom";
import fetchapi from "../../api/fetchapi";
import { useState , useEffect } from "react";
import Loading from "../../components/AçãoRealizada/AçãoRealizada"
import Deletando from "../../components/Deletando/Deletando"
import services from "../../services/services"
import ItemDetalhesVendas from "../../components/ItemDetalhesVendas/ItemDetalhesVendas";

function DetalhesVendas() {
    const {rastreio} = useParams()

    const [resultVendas , setResultVendas] = useState([])
    const [loadingVendas , setloadingVendas] = useState(true)
    const [deletando , setDeletando] = useState(false)


    useEffect(() => {
        fetchapi.ProcurarVendasId(rastreio).then((response) => {
            setResultVendas(response)
            setloadingVendas(false)
        })
    }, [])

    const deleteVenda =  () => {
        setDeletando(true)
        fetchapi.DeletarVenda(rastreio)

        setTimeout(() => {
            window.location.href = "/"
        }, 2000)
    }

    return ( 
        <div id="detalhesVenda">
            <h2>Detalhes Venda</h2>
            {deletando && <Deletando/>}
            {loadingVendas && <Loading/> || (

            <div>

                <div className="detalhesVendaInfoCliente">
                    <p><strong>data: </strong>{resultVendas[0].date}</p>
                    <p><strong>cliente: </strong>{"Carlos Souza"}</p>
                    <p><strong>status: </strong>{"Concluida"}</p>
                    <p><strong>vendedor(a): </strong>{"Marcia"}</p>
                </div>
                <div className="detalhesVendaAreaButton">
                    <button className="detalhesVendaButton NFE-sVenda"><LiaFileInvoiceDollarSolid /> NFE-s</button>
                    <button className="detalhesVendaButton EditarVenda"><FaEdit/> Editar</button>
                    <button className="detalhesVendaButton DeletarVenda" onClick={() => deleteVenda()}><MdDeleteOutline/> Deletar Venda</button>
                </div>
                <div className="displayflexdetalhesVenda">
                    <div>
                        {resultVendas.map((venda) => <ItemDetalhesVendas venda={venda}/>)}
                        
                    </div>
                    <div>
                        <div className="infosdetalhesVenda">
                            <p><strong>parcela: </strong>{"1/1"}</p>
                            <p><strong>Pagamento: </strong>{resultVendas[0].pagamento}</p>
                            <p><strong>Juros: </strong>{"R$ 00,00"}</p>
                            <h2>Total: {services.formatarCurrency(resultVendas[0].total)}</h2>
                        </div>
                    </div>
                </div>
            </div>
            )}
            
        </div>
     );
}

export default DetalhesVendas;