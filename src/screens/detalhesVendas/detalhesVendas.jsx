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
import Notinhas from "../../Arquivos/Notinha/Notinha";
import ItemDetalhesVendas from "../../components/ItemDetalhesVendas/ItemDetalhesVendas";

function DetalhesVendas() {
    const {rastreio} = useParams()

    const [resultVendas , setResultVendas] = useState([])
    const [resultCliente , setResultCliente] = useState([])
    const [resultVendedor , setResultVendedor] = useState([])
    const [loadingVendas , setloadingVendas] = useState(true)
    const [deletando , setDeletando] = useState(false)
    const [nFEs , setNFEs] = useState(false)


    useEffect(() => {
        fetchapi.ProcurarVendasId(rastreio).then((response) => {
            setResultVendas(response)
        })
    }, [])

    useEffect(() => {
        if(resultVendas && resultVendas.length > 0 && resultVendas[0].id_cliente != 0) {
            fetchapi.ProcurarClienteId(resultVendas[0].id_cliente).then((response) => {
                setResultCliente(response[0])
            })
        } else {
            setResultCliente({
                'name' : 'DESCONHECIDO',
                'endereço' : 'DESCONHECIDO',
                'telefone' : 'DESCONHECIDO'
            })
        }
    }, [resultVendas])

    useEffect(() => {
        if(resultVendas && resultVendas.length > 0) {
            fetchapi.ProcurarVendores(resultVendas[0].id_vendedor).then((response) => {
                setResultVendedor(response[0])
                setloadingVendas(false)
            })
        }
    }, [resultCliente])

    const deleteVenda =  () => {
        setDeletando(true)
        fetchapi.DeletarVenda(rastreio)

        setTimeout(() => {
            window.location.href = "/vendas"
        }, 2000)
    }

    const ImprimirNotinha = () => {
        window.print()
    }

    return ( 
        <div id="detalhesVenda">
            {loadingVendas && <Loading/> || (
                <div>

                    <div className="Notinhas"><Notinhas produtos={resultVendas} cliente={resultCliente}/></div>
                <div className="tirarImprimir">
                <h2>Detalhes Venda</h2>
                {deletando && <Deletando/>}
                {nFEs && 
                <div className="NFEsTrue">
                    <p onClick={() => ImprimirNotinha()}>Notinha</p>
                    <p>Nota Fiscal</p>
                    <p>Cupom Fiscal</p>
                </div>
                }
                    <div>
    
                    <div className="detalhesVendaInfoCliente">
                        <p><strong>data: </strong>{services.formatarData(resultVendas[0].date)}</p>
                        <p><strong>cliente: </strong><a href={`/detalhesClientes/${resultVendas[0].id_cliente}`}>{resultCliente.name}</a></p>
                        <p><strong>status: </strong>{resultVendas[0].status}</p>
                        <p><strong>vendedor(a): </strong>{resultVendedor.nome}</p>
                    </div>
                    <div className="detalhesVendaAreaButton">
                        <button className="detalhesVendaButton NFE-sVenda" onClick={() => {
                            if(nFEs) {setNFEs(false)}else{setNFEs(true)}
                        }}><LiaFileInvoiceDollarSolid /> NFE-s</button>
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
                </div>
                </div>
                )}
            </div>
     );
}

export default DetalhesVendas;