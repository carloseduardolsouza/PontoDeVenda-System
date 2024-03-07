import "./vendas.css"

import ItensTable from "../../components/itensTableVendas/itensTableVendas"
import ItensTablePendentes from "../../components/itensTableVendasPendentes/itensTableVendasOpen"

import { FaFilter } from "react-icons/fa";
import fetchapi from "../../api/fetchapi";
import Loading from "../../components/AçãoRealizada/AçãoRealizada"

import { useState , useEffect } from "react"
import ItensTabelVendasAReceber from "../../components/ItensTabelVendasAReceber/ItensTabelVendasAReceber";

function Vendas() {
    const Data = new Date()
    const log = `${Data.getUTCDate()}/${Data.getUTCMonth() + 1}/${Data.getUTCFullYear()}`

    const [históricoOpen , setHistóricoOpen] = useState(true)
    const [vendasReceber , setVendasReceber] = useState(false)
    const [embreve , setEmBreve] = useState(true)

    const [resultVendas , setResultVendas] = useState([])
    const [resultVendasPendentes , setResultVendasPendentes] = useState([])
    const [loadingVendas , setloadingVendas] = useState(true)

    useEffect(() => {
        fetchapi.ProcurarVendas().then((response) => {
            setResultVendas(response)
            setloadingVendas(false)
        })
    }, [])

    useEffect(() => {
        fetchapi.procurarVendaPendente().then((response) => {
            setResultVendasPendentes(response)
        })
    }, [])

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
                    <button style={{textDecoration: 'underline #0295ff 3px'}} onClick={() => {setHistóricoOpen(true) ; setVendasReceber(false)}}>Histórico</button>
                    <button style={{textDecoration: 'underline #0295ff 3px'}} onClick={() => {setHistóricoOpen(false) ; setVendasReceber(false)}}>Pedidos em aberto</button>
                    <button style={{textDecoration: 'underline #0295ff 3px'}} onClick={() => {setHistóricoOpen(false) ; setVendasReceber(true)}}>Vendas Receber</button>
                </div>
                {históricoOpen && (
                    <div>
                    <form>
                        <input type="date" className="FilterDateVendas"/>
                        <button className="FilterICONDateVendas"><FaFilter /></button>
                    </form>
                    <table className="TableVendas">
                        <div className="TableHeader">
                            <p className="itemTabelTitle">Produto</p>
                            <p className="itemTabelTitle PreçoVendasScreenTable">Preço</p>
                            <p className="itemTabelTitle QuantidadeVendasScreenTable">Quantidade</p>
                            <p className="itemTabelTitle DescontoVendasScreenTable">Desconto</p>
                            <p className="itemTabelTitle TotalVendasScreenTable">Total</p>
                            <p className="itemTabelTitle Data">Data</p>
                        </div>
                        {loadingVendas && <Loading/> || resultVendas.map((vendas) => <ItensTable data={vendas}/>)}
                    </table>
                    </div>
                ) || vendasReceber && (
                    <div>
                        <h1>EM BREVE</h1>
                        {/*<table className="TableVendas">
                            <div className="TableHeader">
                                <p className="itemTabelTitle">Cliente</p>
                                <p className="itemTabelTitle">produto</p>
                                <p className="itemTabelTitle">N.Parcela</p>
                                <p className="itemTabelTitle">valor</p>
                                <p className="itemTabelTitle">vencimento</p>
                                <p className="itemTabelTitle">Ações</p>
                            </div>
                            <ItensTabelVendasAReceber/>
                    </table>*/}
                    </div>
                ) || (
                        <table className="TableVendas">
                        <div className="TableHeader">
                            <p className="itemTabelTitle">Produto</p>
                            <p className="itemTabelTitle PreçoVendasScreenTable">Preço</p>
                            <p className="itemTabelTitle QuantidadeVendasScreenTable">Quantidade</p>
                            <p className="itemTabelTitle DescontoVendasScreenTable">Desconto</p>
                            <p className="itemTabelTitle TotalVendasScreenTable">Total</p>
                            <p className="itemTabelTitle PagamentoVendasScreenTables">Pagamento</p>
                            <p className="itemTabelTitle AçõesVendasScreenTables">Ações</p>
                        </div>
                        {loadingVendas && <Loading/> || resultVendasPendentes.map((venda) => <ItensTablePendentes venda={venda} arrayVendas={setResultVendasPendentes}/>)}
                    </table>
                )}
            </main>
        </div>
     );
}

export default Vendas;