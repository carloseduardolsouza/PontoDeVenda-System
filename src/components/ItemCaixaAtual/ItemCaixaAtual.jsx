import "./ItemCaixaAtual.css"

function ItemCaixaAtual() {
    return ( 
        <div id="ItemCaixaAtual">
            <div id="detalheesteticoItemCaixaAtual">
                <div id="bolinhaItemCaixaAtual"/>
                <div id="linhaItemCaixaAtual"/>
            </div>

            <div>
                <h3>{"- R$ 200,00"}</h3>
                <p>Conta de Luz</p>
                <p>Dinheiro</p>
            </div>
            <p id="HoraItemCaixaAtual">{"13:19"}</p>
        </div>
     );
}

export default ItemCaixaAtual;