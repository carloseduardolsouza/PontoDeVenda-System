import "./CardFornecedores.css"

function CardFornecedores() {
    return ( 
        <div id="CardFornecedores">
           <button className="DetalhesCardFornecedores">Detalhes</button>
            <h3>{"Realiza Distribuidora"}</h3>
            <label>
                <button className="CatalagoCardFornecedores">Catálago</button>
                <p><strong>Contato: </strong><a href="#">{"(62) 9 93362090"}</a></p>
            </label>
            <div>
                <p>ultima compra</p>
                <table className="tableCardFornecedores">
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{"Comoda Capri"}</td>
                            <td>{"R$200"}</td>
                            <td>{"2"}</td>
                            <td>{"R$400"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default CardFornecedores;