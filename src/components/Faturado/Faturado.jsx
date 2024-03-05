import "./Faturado.css";
import services from "../../services/services";
import fetchapi from "../../api/fetchapi";

function Faturado({ functio , data , cliente , concluind , desabilitar}) {
    var calc = 0
    data.map((produto, index) => {
        calc += produto.preço
    })
    
    data.map((produto , index) => {
        produto.total = +calc
        console.log(produto)
    })  

    const FaturarSistema = async () => {
        concluind(true)
        await data.map((venda) => fetchapi.NovaVenda(venda))
        setTimeout(() => {
            window.location.reload()
        },1500)
    }
    return ( 
        <div id="Faturado">
            <header>
                <p><strong>Cliente: </strong>{cliente.name}</p>
                <p><strong>Numero: </strong>{services.formatarNumeroCelular(cliente.telefone)}</p>
            </header>

            <main>
                {data.map((produto, index) => (
                    <div key={index}>
                        <p><strong>Produto: </strong>{produto.produto}</p>
                        <label id="labelDisplayFles">
                            <p><strong>Preço: </strong>{services.formatarCurrency(produto.preço)}</p>
                            <p><strong>Quantidade: </strong>{produto.quantidade}</p>
                        </label>
                        <div className="line"/>
                    </div>
                ))}
            </main>

            <h2>TOTAL: {services.formatarCurrency(calc)}</h2>
            <div className="alignhButton">
                <button className="bttFaturado" onClick={() => {desabilitar(false);functio(false)}}>Voltar</button>
                <button className="bttFaturado" onClick={() => FaturarSistema()}>Faturar</button>
            </div>
        </div>
     );
}

export default Faturado;
