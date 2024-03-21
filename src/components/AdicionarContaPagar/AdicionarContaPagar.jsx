import "./AdicionarContaPagar.css"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useState } from "react";

function AdicionarContaPagar({functio}) {
    const [semCateg , setSemCateg] = useState(false)

    const ConcluirNovaContaPagar = () => {
        functio(false)
    }
    return ( 
        <div id="AdicionarContaPagar">
            <h3>Nova Conta</h3>
            <button id="VoltarContaPagarNova" onClick={() => functio(false)}><IoArrowBackCircleOutline /></button>
            <main>
                <section>
                    <p>Categoria:</p>
                    {semCateg && 
                    <div>
                    <input type="text" className="InputNovaContaPagar"/>
                    </div> ||
                    <select className="SelectNovaContaPagar">
                        <option value="Energia">Energia</option>
                        <option value="Água">Água</option>
                        <option value="Internet">Internet</option>
                        <option value="Salario">Salario de Funcionário</option>
                        <option value="Imprestimo">Imprestimo</option>
                        <option value="Compra">Compra</option>
                    </select>
                    }
                    <label className="outraCateg">
                        <input type="checkbox" onChange={() => setSemCateg(!semCateg)} value={semCateg} className="InputNovaContaPagar"/>
                        <p>Outra</p>
                    </label>
                </section>

                <section>
                    <p>Vencimento:</p>
                    <input type="date" className="InputNovaContaPagar"/>
                </section>

                <section>
                    <p>Valor:</p>
                    <input type="number" className="InputNovaContaPagar"/>
                </section>

                <section>
                    <p>Recorrente :</p>
                    <input type="checkbox" />
                </section>

                <section>
                    <p>Observação</p>
                    <input type="text"  className="InputNovaContaPagar"/>
                </section>
            </main>
            <button onClick={() => ConcluirNovaContaPagar()} className="ConcluirNovaContaPagar">Concluir</button>
        </div>
     );
}

export default AdicionarContaPagar;