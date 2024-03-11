import "./Notinha.css"
import services from "../../services/services";
import Tbody from "../../components/trNotinha/trNotinha"
import LogoLider from "../../assets/Logo-lider.png"

function Notinha({produtos , cliente}) {
    return (
        <div>
        <div className="PtNotinha dotted">
            <header className="header">
                <div><img src={LogoLider} alt="#" className="LogoLider" /></div>
                <div>
                    <strong>CNPJ: 53.594.918/0001-72</strong><br />
                    <strong>R. Géneral Joaquim Ínacio, Setor Central , N.684</strong><br />
                    <strong>(62) 9 9551-8934</strong>
                </div>
            </header>
            <main>
                <div>
                    <p><strong>Pagamento: </strong>{produtos[0].pagamento}</p>
                </div>
                <div className="BoxInfo">
                    <p><strong>Cliente:  </strong>{cliente.name}</p>
                    <p><strong>Telefone:  </strong>{services.formatarNumeroCelular(cliente.telefone)}</p>
                    <p><strong>Endereço:  </strong>{cliente.endereço}</p>
                    <p><strong>Data:  </strong>{services.formatarData(produtos[0].date)}</p>
                </div>
            </main>
            <table className="table">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Unidade</th>
                        <th>Vl. unitário</th>
                        <th>Desconto</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((product) => <Tbody product={product}/>)}
                </tbody>
            </table>
            <div className="PreFooter">
                <h3>Qtde. itens: {produtos.length}</h3>
                <h3>Valor Total: {services.formatarCurrency(produtos[0].total)}</h3>
            </div>
            <footer>
                <div className="div"></div>
                <div className="footer">
                    <p>assinatura do responsável</p>
                    <p>assinatura do cliente</p>
                </div>
            </footer>
        </div>

        <div className="PtNotinha">
            <header className="header">
                <div><img src={LogoLider} alt="#" className="LogoLider" /></div>
                <div>
                    <strong>CNPJ: 53.594.918/0001-72</strong><br />
                    <strong>R. Géneral Joaquim Ínacio, Setor Central , N.684</strong><br />
                    <strong>(62) 9 9551-8934</strong>
                </div>
            </header>
            <main>
                <div>
                    <p><strong>Pagamento: </strong>{produtos[0].pagamento}</p>
                </div>
                <div className="BoxInfo">
                    <p><strong>Cliente:  </strong>{cliente.name}</p>
                    <p><strong>Telefone:  </strong>{services.formatarNumeroCelular(cliente.telefone)}</p>
                    <p><strong>Endereço:  </strong>{cliente.endereço}</p>
                    <p><strong>Data:  </strong>{services.formatarData(produtos[0].date)}</p>
                </div>
            </main>
            <table className="table">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Unidade</th>
                        <th>Vl. unitário</th>
                        <th>Desconto</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((product) => <Tbody product={product}/>)}
                </tbody>
            </table>
            <div className="PreFooter">
                <h3>Qtde. itens: {produtos.length}</h3>
                <h3>Valor Total: {services.formatarCurrency(produtos[0].total)}</h3>
            </div>
            <footer>
                <div className="div"></div>
                <div className="footer">
                    <p>assinatura do responsável</p>
                    <p>assinatura do cliente</p>
                </div>
            </footer>
        </div>
        </div>
    );
}

export default Notinha;
