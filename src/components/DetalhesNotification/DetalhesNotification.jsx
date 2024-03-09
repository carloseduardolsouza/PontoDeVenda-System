import "./DetalhesNotification.css"

function DetalhesNotification() {
    return ( 
        <div id="DetalhesNotification">
            <h3>{'Estoque Minimo'}</h3>
            <p>{"seu estoqeu de 'colchão casal d-20 138,188' atingiu o estoque minimo faça um pedido ao seu fornecedor agora"}</p>
            <button className="OKDetalhesNotification">OK</button>
        </div>
     );
}

export default DetalhesNotification;