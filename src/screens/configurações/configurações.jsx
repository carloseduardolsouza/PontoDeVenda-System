import "./configurações.css"
import ConfiguraçõesEmpresa from "../../components/ConfiguraçõesEmpresa/ConfiguraçõesEmpresa"

function configurações() {
  return ( 
    <div id="configurações">
      <h2>Configurações</h2>
      <header>
        <p>Empresa</p> 
        <p>Preferencias</p>
      </header>
        <ConfiguraçõesEmpresa/>
    </div>
   );
}

export default configurações;