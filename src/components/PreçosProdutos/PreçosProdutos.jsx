import "./PreçosProdutos.css"
import { useState } from "react";

import services from "../../services/services"
import fetchapi from "../../api/fetchapi";

import ItensTableReposição from "../itensTableReposição/itensTableReposição";

function PreçosProdutos({data}) {
    const {
        id,
        produto,
        preçocompra,
        margem,
        preçovenda,
        emestoque,
        defal,
        descrição,
        imagem,
        marca,
        comição,
        ipi
    } = data

    const [quantidade , setQuantidade] = useState()
    const [preço , setPreço] = useState()
    const [markup , setMarkup] = useState()
    const [preçodevenda , setPreçodevenda] = useState(0)



    const Data = new Date()
    const log = `${Data.getUTCDate()}/${Data.getUTCMonth() + 1}/${Data.getUTCFullYear()}`

    const [reposição , setReposição] = useState(false)

    const calcular = () => {
        const calculo = (markup / 100) * preço
        const resultado = calculo + preço
        setPreçodevenda(resultado)
    }

    const lançarnoestoque = () => {
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

        fetchapi.AtualizarProduto(array)

        setPreçodevenda(0)
        setReposição(false)
    }
    return ( 
        <div>
            {reposição && 
            <form className="setInfoGerenceiarEstoque" onSubmit={() => lançarnoestoque()}>
                <h2>{log}</h2>
                <h3>{produto}</h3>
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
            <button className="bttReposiçãoGerenciarEstoque" onClick={() => setReposição(true)}>Reposição</button>
            <div className="AreaInfoGerenciarEstoque">
                <label>
                    <p><strong>Produto:  </strong>{produto}</p>
                    <p><strong>Ultima reposição:  </strong>{"10/10/2005"}</p>
                </label>
                <p><strong>Preço de compra:  </strong>{services.formatarCurrency(preçocompra)}</p>
                <p><strong>Preço de venda:  </strong>{services.formatarCurrency(preçovenda)}</p>
                <p><strong>Em estoque:  </strong>{emestoque} unidades</p>
                <p id="Markup"><strong>Markup:  </strong>{margem}%</p>
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
     );
}

export default PreçosProdutos;