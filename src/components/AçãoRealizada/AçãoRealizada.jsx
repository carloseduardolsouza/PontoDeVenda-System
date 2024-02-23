import "./AçãoRealizada.css"

import { FaCheckCircle } from "react-icons/fa";

function AçãoRealizada(event) {
    return ( 
        <div id="AçãoRealizada">
            {event && (
            <div class="wrapper">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
            </div>
            ) || (
                <h2><FaCheckCircle /> Concluído</h2>
            )}
        </div>
    );
}

export default AçãoRealizada;