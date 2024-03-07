import "./itensTableVendasOpen.css"

import DetalhesPendentes from "../DetalhesPendentes/DetalhesPendentes.jsx";
import services from "../../services/services.js";
import fetchapi from "../../api/fetchapi.js"

import { useEffect, useState } from "react";

function ItensTableVendas({venda , arrayVendas}) {
    const [openDetalhesPendes , setOpenDetalhesPendes] = useState(false)
    const [infoClient , setInfoCliente] = useState([])
    const [loadingPendente , setLoadingPendente] = useState(true)

    const ExitDetalhes = () => {
        setOpenDetalhesPendes(false)
    }

    useEffect(() => {
        fetchapi.ProcurarClienteId(venda.id_cliente).then((response) => {
            setInfoCliente(response[0])
            setLoadingPendente(false)
        })
    },[])

    const data = {
        ExitDetalhes: () => {
            setOpenDetalhesPendes(false)
        },
        id: venda.id,
        Produto: venda.produto,
        Total: venda.total,
        Pagamento: venda.pagamento,
        Ação: venda.status,
        Cliente: infoClient.name,
        Endereço: infoClient.endereço,
        id_cliente: infoClient.id
    }

    return ( 
        <div className="ItensTableVendas">
            {openDetalhesPendes && (
                <DetalhesPendentes data={data} arrayVendas={arrayVendas}/>
                )}
            <p className="RespostTable">{venda.produto}</p>
            <p className="RespostTable PreçoVendasScreenTable">{services.formatarCurrency(venda.preço_und)}</p>
            <p className="RespostTable QuantidadeVendasScreenTable">{venda.quantidade}</p>
            <p className="RespostTable DescontoVendasScreenTable">{venda.desconto}</p>
            <p className="RespostTable TotalVendasScreenTable">{services.formatarCurrency(venda.preço)}</p>
            <p className="RespostTable PagamentoVendasScreenTables">{venda.pagamento}</p>
            <button className="RespostTable AçõesVendasScreenTables" onClick={() => {setOpenDetalhesPendes(true)}}>Detalhes</button>
        </div>
     );
}

export default ItensTableVendas;