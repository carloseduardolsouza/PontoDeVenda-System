import services from "../../services/services";

function ItemDetalhesVendas({venda}) {
    return ( 
        <div className="InfoVenda">
            <p><strong>Produto: </strong>{venda.produto}</p>
            <p><strong>valor: </strong>{services.formatarCurrency(venda.preço_und)}</p>
            <p><strong>desconto: </strong>{venda.desconto}</p>
            <p><strong>quantidade: </strong>{venda.quantidade}</p>
            <h3>total: {services.formatarCurrency(venda.preço)}</h3>
        </div>
     );
}

export default ItemDetalhesVendas;