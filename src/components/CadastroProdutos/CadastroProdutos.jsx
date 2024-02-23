import "./CadastroProdutos.css"

import { GiMoneyStack } from "react-icons/gi";
import { FaCamera } from "react-icons/fa";

function CadastroProdutos(event) {
    return ( 
        <div id="CadastroProdutos">
            <form className="AreaInputsNovoProduto">
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
                <button className="bttCadastrarNovoProduto">Cadastrar</button>
            </form>

            <div className="imageProduto">
                <div><FaCamera /></div>
            </div>
        </div>
     );
}

export default CadastroProdutos;