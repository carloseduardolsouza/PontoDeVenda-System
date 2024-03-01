import "./ProdutosNovaVenda.css"
import services from "../../services/services";

function ProdutosNovaVenda({data}) {
    const {
        Produto,
        Quantidade,
        Preço,
        Desconto
    } = data
    return ( 
        <div id="ProdutosNovaVenda">
            <p><strong>Produto: </strong> {Produto}</p>
            <p><strong>Quantidade: </strong> {Quantidade}</p>
            <p><strong>Preço: </strong> {services.formatarCurrency(Preço)}</p>
            <p><strong>Desconto: </strong> {Desconto}</p>
        </div>
     );
}

export default ProdutosNovaVenda;