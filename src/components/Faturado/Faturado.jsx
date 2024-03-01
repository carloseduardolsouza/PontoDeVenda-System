import "./Faturado.css";
import services from "../../services/services";

function Faturado({ functio , data , fetch , cliente}) {
    return ( 
        <div id="Faturado">
            <header>
                <p><strong>Cliente: </strong>{cliente.name}</p>
                <p><strong>Numero: </strong>{services.formatarNumeroCelular(cliente.telefone)}</p>
            </header>

            <main>
                {data.map((produto, index) => (
                    <div key={index}>
                        <p><strong>Produto: </strong>{produto.Produto}</p>
                        <label id="labelDisplayFles">
                            <p><strong>Preço: </strong>{services.formatarCurrency(produto.Preço)}</p>
                            <p><strong>Quantidade: </strong>{produto.Quantidade}</p>
                        </label>
                        <div className="line"/>
                    </div>
                ))}
            </main>

            <h2>TOTAL: {"R$ 300,00"}</h2>
            <div className="alignhButton">
                <button className="bttFaturado" onClick={() => functio(false)}>Voltar</button>
                <button className="bttFaturado" onClick={() => fetch()}>Faturar</button>
            </div>
        </div>
     );
}

export default Faturado;
