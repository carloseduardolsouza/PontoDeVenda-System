import "./itensTableVendasOpen.css"

import DetalhesPendentes from "../DetalhesPendentes/DetalhesPendentes.jsx";
import services from "../../services/services.js";

import { useState } from "react";

function ItensTableVendas({venda}) {
    console.log(venda)
    const [openDetalhesPendes , setOpenDetalhesPendes] = useState(false)

    const ExitDetalhes = () => {
        setOpenDetalhesPendes(false)
    }

    const data = {
        ExitDetalhes: () => {
            setOpenDetalhesPendes(false)
        }
    }

    return ( 
        <div className="ItensTableVendas">
            {openDetalhesPendes && (
                <DetalhesPendentes data={data}/>
                )}
            <p className="RespostTable">{venda.produto}</p>
            <p className="RespostTable">{services.formatarCurrency(venda.preço_und)}</p>
            <p className="RespostTable">{venda.quantidade}</p>
            <p className="RespostTable">{venda.desconto}</p>
            <p className="RespostTable">{services.formatarCurrency(venda.preço)}</p>
            <p className="RespostTable">{venda.pagamento}</p>
            <button className="RespostTable bttnRespostTableAbertoss" onClick={() => {setOpenDetalhesPendes(true)}}>Detalhes</button>
        </div>
     );
}

export default ItensTableVendas;