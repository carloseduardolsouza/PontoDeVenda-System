import "./PreçosProdutos.css"
import { useState , useEffect } from "react";

import Loading from "../AçãoRealizada/AçãoRealizada"
import services from "../../services/services"
import fetchapi from "../../api/fetchapi";

import Concluindo from "../Concluindo/Concluindo"

import ItensTableReposição from "../itensTableReposição/itensTableReposição";

function PreçosProdutos({id}) {
    const [quantidade , setQuantidade] = useState()
    const [noestoque , setNoestoque] = useState('')
    const [markup , setMarkup] = useState('')
    const [preçodevenda , setPreçodevenda] = useState('')
    const [preço , setPreço] = useState('')
    const [loading , setloading] = useState(true)
    const [resultProdutos , setResultProdutos] = useState()

    const [conclued , setConclued] = useState(false)

    const Data = new Date()
    const log = `${Data.getUTCDate()}/${Data.getUTCMonth() + 1}/${Data.getUTCFullYear()}`

    const [reposição , setReposição] = useState(false)

    useEffect(() => {
        fetchapi.ProcurarProdutosId(id).then((response) => {
            setResultProdutos(response[0])

            setNoestoque(response[0].emestoque)
            setMarkup(response[0].margem)
            setPreço(response[0].preçocompra)
            setPreçodevenda(response[0].preçovenda)
        
            setloading(false)
        })
    }, [])

    const calcular = () => {
        const calculo = (markup / 100) * preço
        const resultado = calculo + preço
        setPreçodevenda(resultado)
    }

    const lançarnoestoque = async (e) => {

        e.preventDefault()
        const {
            id,
            produto,
            defal,
            descrição,
            imagem,
            marca,
            comição,
            ipi
        } = resultProdutos

        const array = {
            "id": id,
            "produto" : produto,
            "preçocompra" : preço,
            "margem" : markup,
            "preçovenda": preçodevenda,
            "emestoque" : quantidade,
            "descrição" : descrição,
            "imagem" : imagem,
            "marca" : marca,
            "comição" : comição,
            "defal" : defal,
            "ipi" : ipi,
            "type" : "estoque"
        }
        
        await fetchapi.AtualizarProduto(array)
        await fetchapi.ProcurarProdutosId(id).then((respponse) => {
            const {
                preçocompra,
                preçovenda,
                margem,
                emestoque
            } = respponse[0]
            setMarkup(margem)
            setPreçodevenda(preçovenda)
            setPreço(preçocompra)
            setNoestoque(emestoque)

        })
        setConclued(true)
        setTimeout(() => {
            setConclued(false)
            setReposição(false)
        },1500)
    }
    return ( 
        <div>
            {conclued && <Concluindo/>}
            {loading && <Loading/> ||
            <div>
            {reposição && 
            <form className="setInfoGerenceiarEstoque" onSubmit={(e) => lançarnoestoque(e)}>
                <button className="ExitLançarCompraEstoque" onClick={() => setReposição(false)}>X</button>
                <h2>{log}</h2>
                <h3>{resultProdutos.produto}</h3>
                <label>
                    <p>Quantidade: </p>
                    <input type="number" onChange={(e) => setQuantidade(+e.target.value)} required/>
                </label>
                <label>
                    <p>preço: </p>
                    <input type="number" onChange={(e) => setPreço(+e.target.value)} required/>
                </label>
                <label>
                    <p>markup: </p> 
                    <input type="number" onChange={(e) => setMarkup(+e.target.value)} required/>
                </label>
                <button className="calcularBttsetInfoGerenceiarEstoque" type="button" onClick={() => calcular()}>Calcular preço de venda</button>
                <h2>Preço de venda: {services.formatarCurrency(preçodevenda)}</h2>
                <button type="submit" className="lançarBttsetInfoGerenceiarEstoque">Lançar no estoque</button>
            </form> || 


            <div>
            <button className="bttReposiçãoGerenciarEstoque" onClick={() => setReposição(true)}>Gerenciar Estoque</button>
            <div className="AreaInfoGerenciarEstoque">
                <label>
                    <p><strong>Produto:  </strong>{resultProdutos.produto}</p>
                    <p><strong>Ultima reposição:  </strong>{"10/10/2005"}</p>
                </label>
                <p><strong>Preço de compra:  </strong>{services.formatarCurrency(preço)}</p>
                <p><strong>Preço de venda:  </strong>{services.formatarCurrency(preçodevenda)}</p>
                <p><strong>Em estoque:  </strong>{noestoque} unidades</p>
                <p id="Markup"><strong>Markup:  </strong>{markup}%</p>
            </div>
            <div>
                <table className="gerenTabelEstoque TableVendas">
                <div className="TableHeader">
                            <p className="itemTabelTitle">Data</p>
                            <p className="itemTabelTitle">Preço de unitário</p>
                            <p className="itemTabelTitle">Quantidade</p>
                            <p className="itemTabelTitle">Pagamento</p>
                            <p className="itemTabelTitle">Total</p>
                            <p className="itemTabelTitle detailhes">Detalhes</p>
                        </div>
                        <ItensTableReposição/>
                </table>
            </div>
            </div>
            }
            </div>
}
        </div>
     );
}

export default PreçosProdutos;