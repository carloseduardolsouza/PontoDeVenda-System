import Cores from "../Cores/Cores.jsx";

import "./ItensTableProdutos.css"

import { useState } from "react";

function ItensTableProdutos() {
    const [openDetalhes , setOpenDetalhes] = useState(false)
    return ( 
        <div id="ItensTableProdutos">
            {openDetalhes && (
                <div className="openDetalhes">
                    <button className="ExitDetalhesProduto" onClick={() => setOpenDetalhes(false)}>X</button>
                    <h4>Detalhes</h4>
                    <p>{"djbsajdbasjdbasjd askjd asjidnsajdnjasbd asudnasjbdjasbd asdbnjasnbdjsabndasdas duasduiasjidbasibdhiasd uasndjiasbdhbashidnasd sajbndjasbnjkdnbsajkdniasndjnsad suandjsandjknasjkdbnasd asjidnjsandjnasjdn"}</p>
                </div>
            )}
            <div 
            className="ImageProduto"
            style={{backgroundImage: "url(https://drjfg1pv75pds.cloudfront.net/products2/8de7c3fb-f297-4f41-9a46-7da1e6ed8f17.jpeg)"}}
            />
            <div>
                <h2>{"Comoda Capri"}</h2>
                <p><strong>Codigo</strong></p>
                <p>{"120"}</p>
                <p><strong>Preço :</strong></p>
                <p>{"R$ 230,00"}</p>
                <p><strong>Em Estoque :</strong></p>
                <p>{"50 unidades"}</p>
                <button className="DetalhesProdutos" onClick={() => setOpenDetalhes(true)}>Detalhes</button>
            </div>
        </div>
     );
}

export default ItensTableProdutos;