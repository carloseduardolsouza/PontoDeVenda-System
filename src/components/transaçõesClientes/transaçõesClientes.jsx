import "./transaçõesClientes.css"

import ItensTable from "../../components/itensTableVendas/itensTableVendas"
import { useState , useEffect } from "react";
import fetchapi from "../../api/fetchapi";
import { useParams } from 'react-router-dom';
import Loading from "../AçãoRealizada/AçãoRealizada"

function TransaçõesClientes() {
    const { id } = useParams();

    const [resultVendas , setResultVendas] = useState([])
    const [loadingVendas , setloadingVendas] = useState(true)

    useEffect(() => {
        fetchapi.procurarVendaCliente(id).then((response) => {
            setResultVendas(response)
            setloadingVendas(false)
        })
    }, [])
    return ( 
        <div id="transaçõesClientes">
            <table className="TableVendas">
                        <div className="TableHeader">
                            <p className="itemTabelTitle">Produto</p>
                            <p className="itemTabelTitle">Preço</p>
                            <p className="itemTabelTitle">Quantidade</p>
                            <p className="itemTabelTitle">Desconto</p>
                            <p className="itemTabelTitle">Total</p>
                            <p className="itemTabelTitle">Data</p>
                        </div>
                        {loadingVendas && <Loading/> || resultVendas.map((venda) => <ItensTable data={venda}/>)}
            </table>
        </div>
     );
}

export default TransaçõesClientes;