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
            <p className="RespostTable">{services.formatarCurrency(preço_und)}</p>
            <p className="RespostTable">{quantidade}</p>
            <p className="RespostTable">{desconto}</p>
            <p className="RespostTable">{services.formatarCurrency(preço)}</p>
            <p className="RespostTable">{date}</p>
        </div>
     );
}

export default itensTableVendas;