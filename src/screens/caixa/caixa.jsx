import CaixaAtual from "../../components/CaixaAtual/CaixaAtual";
import CaixasAnteriores from "../../components/CaixasAnteriores/CaixasAnteriores"
import { useState } from "react";
import "./caixa.css"

function Caixa() {
  const [caixaAtual , setCaixaAtual] = useState(true)

  return ( 
    <div id="caixa">
      <h2>Caixa</h2>
      <nav className="MenuCaixa">
        <p onClick={() => setCaixaAtual(true)}>Caixa Atual</p>
        <p onClick={() => setCaixaAtual(false)}>Caixas Anteriores</p>
      </nav>
      <main>
        {caixaAtual && <CaixaAtual/> || <CaixasAnteriores/>}
      </main>
    </div>
   );
}

export default Caixa;