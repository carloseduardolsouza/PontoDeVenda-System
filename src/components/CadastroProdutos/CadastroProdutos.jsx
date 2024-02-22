import "./CadastroProdutos.css"

import { GiMoneyStack } from "react-icons/gi";
import { FaCamera } from "react-icons/fa";

function CadastroProdutos(event) {
    return ( 
        <div id="CadastroProdutos">
            <div className="AreaInputsNovoProduto">
                <la>
                    <p>Nome: </p>
                    <input type="text" className="nomeNovoProduto"/>
                </la>
                    <la>
                        <p>Marca: </p>
                        <input type="text" />
                    </la>

                    <la>
                        <p>Descrição: </p>
                        <textarea id="texto" rows="4" cols="50"></textarea>
                    </la>


                <div className="LinhaDivisão"/>
                <h3><GiMoneyStack className="GiMoneyStack" /></h3>

                <div className="Alinhamento">
                    <la>
                        <p>Preço de compra: </p>
                        <input type="number" />
                    </la>

                    <la>
                        <p>Margem: </p>
                        <input type="number" />
                    </la>
                </div>

                <button className="bttCalcularNovoProduto">Calcular</button>
                <h2>Preço de venda: {"R$ 200,00"}</h2>
            </div>

            <div className="imageProduto">
                <div><FaCamera /></div>
            </div>
        </div>
     );
}

export default CadastroProdutos;