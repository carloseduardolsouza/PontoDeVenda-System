import "./configurações.css"
import ConfiguraçõesEmpresa from "../../components/ConfiguraçõesEmpresa/ConfiguraçõesEmpresa"
import { useState } from "react";
import Preferencias from "../../components/Preferencias/Preferencias";

function Configurações() {
  const [preferencias , setPreferencias] = useState(false)

  return ( 
    <div id="configurações">
      <h2>Configurações</h2>
      <header>
        <p onClick={() => setPreferencias(false)}>Empresa</p> 
        <p onClick={() => setPreferencias(true)}>Preferencias</p>
      </header>
      {preferencias && 
        <Preferencias/> ||
        <ConfiguraçõesEmpresa/>
        }
        
    </div>
   );
}

export default Configurações;