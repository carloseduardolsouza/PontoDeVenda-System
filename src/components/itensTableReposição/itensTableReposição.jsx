import "./itensTableReposição.css"

function itensTableVendas() {
    return ( 
        <div className="ItensTableVendas">
            <p className="RespostTable">{"10/10/2005"}</p>
            <p className="RespostTable">{"R$ 230,00"}</p>
            <p className="RespostTable">{"02"}</p>
            <p className="RespostTable">{"PIX"}</p>
            <p className="RespostTable">{'R$ 460,00'}</p>
            <button className="RespostTable buitão" onClick={() => {
                window.location.href = "/detalhesGerenciarEstoqueReposição/1"
            }}>Detalhes</button>
        </div>
     );
}

export default itensTableVendas;