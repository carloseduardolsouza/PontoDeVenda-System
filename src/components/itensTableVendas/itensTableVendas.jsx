import "./itensTableVendas.css"
import services from "../../services/services";

function itensTableVendas({data}) {
    const {
        produto,
        preço,
        preço_und,
        quantidade,
        desconto,
        date,
        rastreio
    } = data
    return ( 
        <div className="ItensTableVendas">
            <a href={`/detalhesVenda/${rastreio}`} className="RespostTable">{produto}</a>
            <p className="RespostTable PreçoVendasScreenTable">{services.formatarCurrency(preço_und)}</p>
            <p className="RespostTable QuantidadeVendasScreenTable">{quantidade}</p>
            <p className="RespostTable DescontoVendasScreenTable">{desconto}</p>
            <p className="RespostTable TotalVendasScreenTable">{services.formatarCurrency(preço)}</p>
            <p className="RespostTable Data">{services.formatarData(date)}</p>
        </div>
     );
}

export default itensTableVendas;