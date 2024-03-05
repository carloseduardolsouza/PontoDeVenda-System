import IntensEstoque from "../../components/IntensEstoque/IntensEstoque";

import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";

import { useEffect , useState } from "react";
import fetchapi from "../../api/fetchapi";
import Loading from "../../components/AçãoRealizada/AçãoRealizada"

import "./estoque.css"

function Estoque() {
    const [pesquisar , setPesquisar] = useState('all')
    const [resultEstoque , setResultEstoque] = useState([])
    const [loadingEstoque , setloadingEstoque] = useState(true)

    useEffect(() => {
        fetchapi.ProcurarProdutos(pesquisar).then((response) => {
            setResultEstoque(response)
            setloadingEstoque(false)
        })
    }, [])

    const changePesquisa = (e) => {
        setPesquisar(e.target.value)
    }

    const renderEstoque = async (e) => {
        e.preventDefault()
        setloadingEstoque(true)
        const client = await fetchapi.ProcurarProdutos(pesquisar)
        setloadingEstoque(false)
        setResultEstoque(client)
    }

    return ( 
        <div id="ESTOQUE">
            <h2>Estoque</h2>
            <div>
            <form onSubmit={(e) => renderEstoque(e)}>
                    <input type="text"  className="InputClientes" placeholder="Procurar no Estoque..." onChange={(e) => changePesquisa(e)}/>
                    <button className="Search" type="submit"><FaSearch /></button>
                </form>
            </div>
            <table className="TableEstoque">
                <div className="TableHeader">
                    <p className="itemTabelTitle">Produto</p>
                    <p className="itemTabelTitle">Preço de compra</p>
                    <p className="itemTabelTitle">Margem</p>
                    <p className="itemTabelTitle">Em estoque</p>
                    <p className="itemTabelTitle">Codigo</p>
                </div>
                {loadingEstoque && <Loading/> || (
                    resultEstoque.map((estoque) => <IntensEstoque data={estoque}/>)
                )}
            </table>
        </div>
     );
}

export default Estoque;