import "./trNotinha.css"
import services from "../../services/services"

function trNotinha({product}) {
    return ( 
        <tr>
            <td>{product.produto}</td>
            <td>{product.quantidade}</td>
            <td>{services.formatarCurrency(product.preço_und)}</td>
            <td>{product.desconto}</td>
            <td>{services.formatarCurrency(product.preço)}</td>
        </tr>
     );
}

export default trNotinha;