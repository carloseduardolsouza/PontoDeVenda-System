import "./itensTableVendasOpen.css"

import DetalhesPendentes from "../DetalhesPendentes/DetalhesPendentes.jsx";

import { useState } from "react";

function ItensTableVendas() {
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
            <p className="RespostTable">{"COMODA CAPRI"}</p>
            <p className="RespostTable">{"R$ 230,00"}</p>
            <p className="RespostTable">{"01"}</p>
            <p className="RespostTable">{"R$ 00,00"}</p>
            <p className="RespostTable">{"R$ 230,00"}</p>
            <p className="RespostTable">{"PIX"}</p>
            <button className="RespostTable bttnRespostTableAbertoss" onClick={() => {setOpenDetalhesPendes(true)}}>Detalhes</button>
        </div>
     );
}

export default ItensTableVendas;