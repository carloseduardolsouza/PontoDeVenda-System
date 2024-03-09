import "./cardFuncionarios.css"
import user from "../../assets/user.jpg"
import { useState } from "react";

function CardFuncionarios({data}) {
    const {
        nome
    } = data
    const [progress, setProgress] = useState(0);

    return ( 
        <div id="cardFuncionarios">
            <div className="Options">...</div>
            <img src={user} alt="user" />
            <p>{nome}</p>
            <p>{"VENDEDOR"}</p>
            <div className="linha"/>
            <div>
                <p><strong>Vendas: </strong>{"50"} vendas</p>
                <p><strong>Comições: </strong>{"R$ 300,00"}</p>
            </div>
            <div className="AreaDaMeta">
                <strong>Metas</strong>
                <div>
                    vendas :
                <div className="formMeta">
                    <div style={{width: `${progress}%`}} className="Metas"></div>
                </div>
                </div>
            </div>
        </div>
     );
}

export default CardFuncionarios;