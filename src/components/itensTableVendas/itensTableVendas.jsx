import "./itensTableVendas.css"
import services from "../../services/services";

function itensTableVendas({data}) {
    const {
        produto,
        preço,
        quantidade,
        desconto,
        total,
        date
    } = data
    return ( 
        <div className="ItensTableVendas">
            <p className="RespostTable">{produto}</p>
            <p className="RespostTable">{services.formatarCurrency(preço)}</p>
            <p className="RespostTable">{quantidade}</p>
            <p className="RespostTable">{desconto}</p>
            <p className="RespostTable">{services.formatarCurrency(total)}</p>
            <p className="RespostTable">{date}</p>
        </div>
     );
}

export default itensTableVendas;