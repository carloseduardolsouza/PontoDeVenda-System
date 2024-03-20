import "./ProdutosNovaVenda.css"
import services from "../../services/services";

function ProdutosNovaVenda({index , data , deleter}) {
    const {
        produto,
        quantidade,
        preço,
        desconto
    } = data
    return ( 
        <div id="ProdutosNovaVenda">
            <div className="menos" onClick={() => deleter(index)}>-</div>
            <p><strong>Produto: </strong> {produto}</p>
            <p><strong>Quantidade: </strong> {quantidade}</p>
            <p><strong>Preço: </strong> {services.formatarCurrency(preço)}</p>
            <p><strong>Desconto: </strong> {desconto}</p>
        </div>
     );
}

export default ProdutosNovaVenda;