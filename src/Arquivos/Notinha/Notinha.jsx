import "./Notinha.css"

function Notinha() {
    return (
        <div className="PtNotinha dotted">
            <header className="header">
                <div><img src="src/assets/Logo-lider.png" alt="#" className="LogoLider" /></div>
                <div>
                    <strong>Lider Móveis</strong><br />
                    <strong>CNPJ: 00.000.000/0000-00</strong><br />
                    <strong>R. Géneral Joaquim Ínacio, Setor Central , N.684</strong><br />
                    <strong>(62) 9 9551-8934</strong>
                </div>
                <div>
                    Pedido: 000000
                </div>
            </header>
            <main>
                <div>
                    <strong>Venda</strong>
                    <p><strong>Pagamento: </strong>A Prazo</p>
                </div>
                <div className="BoxInfo">
                    <p><strong>Cliente:</strong>Carlos Eduardo Lourenço de Souza</p>
                    <p><strong>Telefone:</strong>62993362090</p>
                    <p><strong>Endereço:</strong>R.2 , Q.2 , Lt.13 Jardim Pétropolis</p>
                    <p><strong>Data:</strong>00/00/0000</p>
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
                    <tr>
                        <td>Comoda Capri</td>
                        <td>1</td>
                        <td>R$200</td>
                        <td>00</td>
                        <td>R$200</td>
                    </tr>
                </tbody>
            </table>
            <div className="PreFooter">
                <h3>Qtde. itens: 3</h3>
                <h3>Valor Total: R$600,00</h3>
            </div>
            <footer>
                <div className="div"></div>
                <div className="footer">
                    <p>assinatura do responsável</p>
                    <p>assinatura do cliente</p>
                </div>
            </footer>
        </div>
    );
}

export default Notinha;
