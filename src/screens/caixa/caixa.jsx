import CaixaAtual from "../../components/CaixaAtual/CaixaAtual";
import "./caixa.css"

function caixa() {
  return ( 
    <div id="caixa">
      <h2>Caixa</h2>
      <nav className="MenuCaixa">
        <p>Caixa Atual</p>
        <p>Caixas Anteriores</p>
      </nav>
      <main>
        <CaixaAtual/>
      </main>
    </div>
   );
}

export default caixa;