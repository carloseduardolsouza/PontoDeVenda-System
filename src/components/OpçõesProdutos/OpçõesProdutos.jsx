import "./OpçõesProdutos.css"

import { useEffect, useState } from "react";
import fetchapi from "../../api/fetchapi"

function OpçõesProdutos({id}) {
    const [infoProduto , setInfoProduto] = useState([])
    const [estoqueMinimo , setEstoqueMinimo] = useState()
    const [comição , setComição] = useState()

    useEffect(() => {
        fetchapi.ProcurarProdutosId(id).then((response) => {
            setInfoProduto(response[0])
            setEstoqueMinimo(response[0].estoque_min)
            setComição(response[0].comição)
        })
    }, [])

    const [edit , setEdit] = useState(false)

    return ( 
        <div >
            {edit && 
            <div className="editOpçõesProdutosTrue">
                <label>
                    <strong>Estoque minimo:</strong>
                    <input type="text" value={estoqueMinimo}/>
                </label>

                <label>
                    <strong>Comição para o vendedor:</strong>
                    <input type="text" value={comição}/>
                </label>

                <button onClick={() => setEdit(false)}>Concluir</button>
            </div> || 
            <div className="editOpçõesProdutosFalse">
                <p><strong>Estoque minimo:  </strong>{estoqueMinimo} unidades</p>
                <p><strong>Comição para o vendedor: </strong>{comição}%</p>
                <button onClick={() => setEdit(true)}>Editar</button>
            </div>
            }
        </div>
     );
}

export default OpçõesProdutos;