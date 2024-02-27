import "./PreçosProdutos.css"
import { useState } from "react";

import services from "../../services/services"

function PreçosProdutos({data}) {
    const {
        produto,
        preçocompra,
        margem,
        preçovenda,
        defal,
        ipi
    } = data

    const [openEditPreços , setOpenEditPreços] = useState(false)
    const [priceSell , setPriceSell] = useState(preçovenda)

    const [changePreçodecompra , setChangePreçodecompra] = useState(preçocompra)
    const [changeMargem , setChangeMargem] = useState(margem)

    const calcularPrice = () => {
        const calculo = (changeMargem / 100) * changePreçodecompra
        const endPrice = calculo + changePreçodecompra
        setPriceSell(endPrice)
    }


    return ( 
        <div id="PreçosProdutos">
            {
                openEditPreços && 
                <div>
                    <h2>{produto}</h2>
                    <p><strong>Preço de compra: </strong></p>
                    <input type="text" value={changePreçodecompra}  onChange={(e) => setChangePreçodecompra(+e.target.value)} className="inputsPreçosProdutos"/>
                    <p><strong>Margem: </strong></p>
                    <input type="text" value={changeMargem} onChange={(e) => setChangeMargem(+e.target.value)} className="inputsPreçosProdutos"/><br/>
                    <button onClick={() => calcularPrice()} className="calcularPreçosProdutos">Calcular</button>
                    <div className="preçovendamarkup">
                        <p><strong>Preço de venda: </strong>{services.formatarCurrency(priceSell) }</p>
                        <p><strong>Markup: </strong>{changeMargem}</p>
                    </div>
                    <div className="linha"/>
                    <p><strong>IPI: </strong>{ipi}</p>
                    <p><strong>DEFAL: </strong>{defal}</p>
                    <button className="EditarGerenciarEstoque" onClick={() => setOpenEditPreços(false)}>concluir</button>
                </div> ||
            <div>
                <h2>{produto}</h2>
                <p><strong>Preço de compra: </strong>{services.formatarCurrency(changePreçodecompra) }</p>
                <p><strong>Margem: </strong>{changeMargem}%</p>
                <div className="preçovendamarkup">
                    <p><strong>Preço de venda: </strong>{services.formatarCurrency(priceSell) }</p>
                    <p><strong>Markup: </strong>{changeMargem}%</p>
                </div>
                <div className="linha"/>
                <p><strong>IPI: </strong>{ipi}</p>
                <p><strong>DEFAL: </strong>{defal}</p>
                <button className="EditarGerenciarEstoque" onClick={() => setOpenEditPreços(true)}>Editar</button>
            </div>
            }

        </div>
     );
}

export default PreçosProdutos;