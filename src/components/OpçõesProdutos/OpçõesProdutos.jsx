import "./OpçõesProdutos.css"

import { useEffect, useState } from "react";
import fetchapi from "../../api/fetchapi"
import Concluindo from "../Concluindo/Concluindo"

function OpçõesProdutos({id}) {
    const [infoProduto , setInfoProduto] = useState([])
    const [estoqueMinimo , setEstoqueMinimo] = useState()
    const [comição , setComição] = useState()
    const [concluindo , setConcluindo] = useState(false)

    useEffect(() => {
        fetchapi.ProcurarProdutosId(id).then((response) => {
            setInfoProduto(response[0])
            setEstoqueMinimo(response[0].estoque_min)
            setComição(response[0].comição)
        })
    }, [])

    const [edit , setEdit] = useState(false)

    const concluirUpdateConfigs = async () => {
        setConcluindo(true)
        const data = {
            'id' : id,
            'comição' : comição,
            'estoque_min' : estoqueMinimo,
            'type' : "opções"
        }
        await fetchapi.AtualizarProduto(data)
        setTimeout(() => {
            setConcluindo(false)
            setEdit(false)
        },1500)
    }

    return ( 
        <div >
            {concluindo && <Concluindo/>}
            {edit && 
            <div className="editOpçõesProdutosTrue">
                <label>
                    <strong>Estoque minimo:</strong>
                    <input type="text" value={estoqueMinimo} onChange={(e) => setEstoqueMinimo(e.target.value)}/>
                </label>

                <label>
                    <strong>Comição para o vendedor:</strong>
                    <input type="text" value={comição} onChange={(e) => setComição(e.target.value)}/>
                </label>

                <button onClick={() => concluirUpdateConfigs()}>Concluir</button>
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