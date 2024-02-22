import DetalhesClientes from "../DetalhesClientes/DetalhesClientes";

import "./ItensClientes.css"

import { useState } from "react";

function ItensClientes() {
    const numero = "62993362090"
    const urlWpp = `https://wa.me/${numero}`

    const [detalhesClientes , setDetalhesClientes] = useState(false)

    return ( 
        <div className="ItensClientes">
            {detalhesClientes && (
                <DetalhesClientes/>
            )}
            <p className="ItensClientesP">{"Carlos Eduardo Lourenço de Souza"}</p>
            <a href={urlWpp} className="ItensClientesP" target="_blank">{"(62 9 9336-2090)"}</a>
            <p className="ItensClientesP">{"R.2 , Qd.2 , Lt.13 , Jardim Petrópolis"}</p>
            <p className="ItensClientesP">{"R$ 500,00"}</p>
            <button className="ItensClientesP button" onClick={() => {setDetalhesClientes(true)}}>Detalhes</button>
        </div>
     );
}

export default ItensClientes;