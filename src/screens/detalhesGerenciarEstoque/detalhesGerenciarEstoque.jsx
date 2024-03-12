import "./detalhesGerenciarEstoque.css"

function detalhesGerenciarEstoque() {
    return (
        <div id="detalhesGerenciarEstoque">
            <header>
                <strong>CNPJ: {"53.594.918/0001-72"}</strong><br />
                <strong>{"R. Géneral Joaquim Ínacio, Setor Central , N.684"}</strong><br />
                <strong>{"(62) 9 9551-8934"}</strong>
            </header>
            <main>
                <div>
                    <p><strong>Pagamento: </strong>{}</p>
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
                    
                </tbody>
            </table>
            <div className="PreFooter">
                <h3>Qtde. itens: {}</h3>
                <h3>Valor Total: {}</h3>
            </div>
        </div>
    );
}

export default detalhesGerenciarEstoque;
