import "./PreçosProdutos.css"

function PreçosProdutos({data}) {
    const {
        produto,
        preçocompra,
        margem,
        preçovenda,
        defal,
        ipi
    } = data

    return ( 
        <div>
            <h2>{produto}</h2>
            <p><strong>Preço de compra: </strong>{preçocompra}</p>
            <p><strong>Margem: </strong>{margem}</p>
            <p><strong>Preço de venda: </strong>{preçovenda}</p>
            <p><strong>Markup: </strong>{"MARKUP"}</p>
            <div className="linha"/>
            <p><strong>IPI: </strong>{ipi}</p>
            <p><strong>DEFAL: </strong>{defal}</p>
            <button className="EditarGerenciarEstoque">Editar</button>

        </div>
     );
}

export default PreçosProdutos;