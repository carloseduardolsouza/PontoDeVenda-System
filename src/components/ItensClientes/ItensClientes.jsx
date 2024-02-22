import "./ItensClientes.css"

function ItensClientes() {
    const numero = "62993362090"
    const urlWpp = `https://wa.me/${numero}`

    return ( 
        <div className="ItensClientes">
            <p className="ItensClientesP">{"Carlos Eduardo Lourenço de Souza"}</p>
            <a href={urlWpp} className="ItensClientesP" target="_blank">{"(62 9 9336-2090)"}</a>
            <p className="ItensClientesP">{"R.2 , Qd.2 , Lt.13 , Jardim Petrópolis"}</p>
            <p className="ItensClientesP">{"R$ 500,00"}</p>
            <a href="/detalhesClientes" className="ItensClientesP button">Detalhes</a>
        </div>
     );
}

export default ItensClientes;