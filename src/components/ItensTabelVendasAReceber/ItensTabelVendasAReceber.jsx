import "./ItensTabelVendasAReceber.css"

function ItensTabelVendasAReceber() {
    return ( 
        <div className="ItensTableVendas">
            <a className="RespostTable">{"Ana Vitoria"}</a>
            <p className="RespostTable">{"Roupeiro"}</p>
            <p className="RespostTable">{"01"}</p>
            <p className="RespostTable">{"R$ 100,00"}</p>
            <p className="RespostTable">{"05/04/2024"}</p>
            <button className="RespostTable bttnRespostTableAbertoss">Detalhes</button>
        </div>
     );
}

export default ItensTabelVendasAReceber;