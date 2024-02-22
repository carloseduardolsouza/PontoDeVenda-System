import "./vendas.css"

import ItensTable from "../../components/itensTableVendas/itensTableVendas"
import ItensTablePendentes from "../../components/itensTableVendasPendentes/itensTableVendasOpen"

import { useState } from "react"

function Vendas() {
    const Data = new Date()
    const log = `${Data.getUTCDate()}/${Data.getUTCMonth() + 1}/${Data.getUTCFullYear()}`

    const [históricoOpen , setHistóricoOpen] = useState(true)
    return ( 
        <div id="VENDAS">
            <header className="HeaderVendas">
                <h2 id="TitleVendas">Vendas</h2>
                <p>{log}</p>
            </header>
            <article className="ArticleVendas">
                <a href="/novaVenda" className="NovaVenda"> Nova Venda</a>
            </article>
            <main>
                <div className="AreaVendasButtons">
                    <button style={{textDecoration: 'underline #0295ff 3px'}} onClick={() => {setHistóricoOpen(true)}}>Histórico</button>
                    <button style={{textDecoration: 'underline #0295ff 3px'}} onClick={() => {setHistóricoOpen(false)}}>Pedidos em aberto</button>
                </div>
                {históricoOpen && (
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
                        <ItensTable/>
                        <ItensTable/>
                        <ItensTable/>
                        <ItensTable/>
                        <ItensTable/>
                        <ItensTable/>
                        <ItensTable/>
                        <ItensTable/>
                        <ItensTable/>
                        <ItensTable/>
                        <ItensTable/>
                        <ItensTable/>
                        <ItensTable/>
                        <ItensTable/>
                        <ItensTable/>
                        <ItensTable/>
                        <ItensTable/>
                    </table>
                ) || (
                        <table className="TableVendas">
                        <div className="TableHeader">
                            <p className="itemTabelTitle">Produto</p>
                            <p className="itemTabelTitle">Preço</p>
                            <p className="itemTabelTitle">Quantidade</p>
                            <p className="itemTabelTitle">Desconto</p>
                            <p className="itemTabelTitle">Total</p>
                            <p className="itemTabelTitle">Pagamento</p>
                            <p className="itemTabelTitle">Ações</p>
                        </div>
                        <ItensTablePendentes/>
                        <ItensTablePendentes/>
                    </table>
                )}
            </main>
        </div>
     );
}

export default Vendas;