import "./DetalhesPendentes.css"
import services from "../../services/services";
import fetchapi from "../../api/fetchapi"

function DetalhesPendentes({data , arrayVendas}) {
    const {
        ExitDetalhes,
        Produto,
        Total,
        Pagamento,
        Ação,
        Cliente,
        Endereço,
        id_cliente,
        id
    } = data

    const concluirVenda = async () => {
        await fetchapi.concluirVenda(id)
        await fetchapi.procurarVendaPendente().then((response) => {
            arrayVendas(response)
        })
        ExitDetalhes()
    }

    return ( 
        <div id="DetalhesPendentes">
            <button className="ExitPendentesDetalhes" onClick={() => ExitDetalhes()}>x</button>
                <p><strong>Cliente</strong></p>
                <a href={`/detalhesClientes/${id_cliente}`}>{Cliente}</a>
                <p><strong>Endereço</strong></p>
                <p>{Endereço}</p>
                <p><strong>Produto</strong></p>
                <p>{Produto}</p>
                <p><strong>TOTAL</strong></p>
                <p>{services.formatarCurrency(Total)}</p>
                <p><strong>Pagamento</strong></p>
                <p>{Pagamento}</p>
                <p><strong>Ação a realizar</strong></p>
                <p>{Ação}</p>
                <label className="switch">
                    <input type="checkbox" onChange={() => concluirVenda()}/>
                    <span className="slider"></span>
                </label>
        </div>
     );
}

export default DetalhesPendentes;