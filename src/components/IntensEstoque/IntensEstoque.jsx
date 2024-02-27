import "./IntensEstoque.css"
import services from "../../services/services"

function IntensEstoque({data}) {
    const {
        id,
        produto,
        preçocompra,
        margem,
        emestoque
    } = data
    return ( 
        <div className="ItensTableEstoque">
            <p className="RespostTableEstoque">{produto}</p>
            <p className="RespostTableEstoque">{services.formatarCurrency(preçocompra)}</p>
            <p className="RespostTableEstoque">{margem}%</p>
            <p className="RespostTableEstoque">{emestoque}</p>
            <p className="RespostTableEstoque">{id}</p>
        </div>
     );
}

export default IntensEstoque;