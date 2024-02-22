import "./transaçõesClientes.css"

import ItensTable from "../../components/itensTableVendas/itensTableVendas"

function transaçõesClientes() {
    return ( 
        <div id="transaçõesClientes">
            <table className="TableVendas">
                        <div className="TableHeader">
                            <p className="itemTabelTitle">Produto</p>
                            <p className="itemTabelTitle">Preço</p>
                            <p className="itemTabelTitle">Quantidade</p>
                            <p className="itemTabelTitle">Desconto</p>
                            <p className="itemTabelTitle">Total</p>
                            <p className="itemTabelTitle">Pagamento</p>
                            <p className="itemTabelTitle">Data</p>
                        </div>
                        <ItensTable/>
            </table>
        </div>
     );
}

export default transaçõesClientes;