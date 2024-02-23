import "./DetalhesPendentes.css"

function DetalhesPendentes({data}) {
    const {
        ExitDetalhes
    } = data

    return ( 
        <div id="DetalhesPendentes">
            <button className="ExitPendentesDetalhes" onClick={() => ExitDetalhes()}>x</button>
                <p><strong>Cliente</strong></p>
                <p>{"CARLOS EDUARDO LOURENÇO DE SOUZA"}</p>
                <p><strong>Endereço</strong></p>
                <p>{"R.2 , Q.2 , Lt.13 , JARDIM PETRÓPOLIS"}</p>
                <p><strong>Produto</strong></p>
                <p>{"COMODA CAPRI"}</p>
                <p><strong>TOTAL</strong></p>
                <p>{"R$ 230,00"}</p>
                <p><strong>Pagamento</strong></p>
                <p>{"PIX"}</p>
                <p><strong>Ação a realizar</strong></p>
                <p>{"Pagamento e entrega"}</p>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                </label>
        </div>
     );
}

export default DetalhesPendentes;