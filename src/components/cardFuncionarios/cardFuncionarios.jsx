import "./cardFuncionarios.css"
import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";
import services from "../../services/services"

function CardFuncionarios({data}) {
    const {
        nome,
        comições,
        nvendas,
        cargo
    } = data
    const [progress, setProgress] = useState(0);

    return ( 
        <div id="cardFuncionarios">
            <div className="InfoFuncionariosDiv">
                <h2>{nome}</h2>
                <h4>{cargo}</h4>
            </div>
            <div>
                <p><strong>Contratação: </strong>{"10102005"}</p>
                <p><strong>N.Vendas: </strong>{nvendas} vendas</p>
                <p><strong>Comição: </strong>{services.formatarCurrency(comições)}</p>
            </div>
            <button className="GearButtonCardFuncionarios"><FaInfoCircle /></button>
        </div>
     );
}

export default CardFuncionarios;