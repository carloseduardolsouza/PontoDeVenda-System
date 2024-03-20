import NaoPagasContasPagar from "../../components/NaoPagasContasPagar/NaoPagasContasPagar";
import PagasContasPagar from "../../components/PagasContasPagar/PagasContasPagar";
import TodasContasPagar from "../../components/TodasContasPagar/TodasContasPagar";
import VencidasContasPagar from "../../components/VencidasContasPagar/VencidasContasPagar";
import "./contasPagar.css"
import { useState } from "react";

function ContasPagar() {
  const [todas , setTodas] = useState(true)
  const [npagas , setNpagas] = useState(false)
  const [vencidas , setVencidas] = useState(false)
  const [pagas , setPagas] = useState(false)

  return ( 
    <div id="contasPagar">
      <h2>Contas a pagar</h2>
      <div className="Action">
        <button>Adicionar Conta</button>
      </div>
      <nav className="NavcontasPagar">
        <p onClick={() => {
          setTodas(true)
          setNpagas(false)
          setVencidas(false)
          setPagas(false)
        }}>Todas</p>
        <p onClick={() => {
          setTodas(false)
          setNpagas(true)
          setVencidas(false)
          setPagas(false)
        }}>Não pagas</p>
        <p onClick={() => {
          setTodas(false)
          setNpagas(false)
          setVencidas(true)
          setPagas(false)
        }}>Vencidas</p>
        <p onClick={() => {
          setTodas(false)
          setNpagas(false)
          setVencidas(false)
          setPagas(true)
        }}>Pagas</p>
      </nav>
      {
        todas && <TodasContasPagar/> ||
        npagas && <NaoPagasContasPagar/> ||
        vencidas && <VencidasContasPagar/> ||
        pagas && <PagasContasPagar/> 
      }
    </div>
   );
}

export default ContasPagar;