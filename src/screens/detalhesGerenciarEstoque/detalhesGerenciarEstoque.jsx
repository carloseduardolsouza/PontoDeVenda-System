import "./detalhesGerenciarEstoque.css"

function detalhesGerenciarEstoque() {
    return ( 
        <div id="detalhesGerenciarEstoque">
            <h2>{"10/10/2005"}</h2>
            <div className="InfodetalhesGerenciarEstoque">
                <p><strong>Produto: </strong>{"Comoda Dhara"}</p>
                <p><strong>Quantidade: </strong>{"10"}</p>
                <p><strong>Preço: </strong>{"R$ 200,00"}</p>
                <p><strong>IPI: </strong>{"2,1%"}</p>
                <p><strong>Desconto: </strong>{"R$ 00,00"}</p>
                <p><strong>Fornedor: </strong>{"Realiza Distribuidora"}</p>
                <p><strong>Pagamento: </strong>{"PIX"}</p>
                <h2>Total: {"R$ 2.000,00"}</h2>
            </div>
            <p><strong>Status: </strong>{"PAGO"}</p>
            <button>Editar</button>
            <button>Excluir</button>
        </div>
     );
}

export default detalhesGerenciarEstoque;