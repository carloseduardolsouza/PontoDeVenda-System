import "./gerenciarEstoque.css"
import { useState } from "react";
import { useParams } from 'react-router-dom';

import InfoGerenciarEstoque from "../../components/InfoGerenciarEstoque/InfoGerenciarEstoque"
import PreçosProdutos from "../../components/PreçosProdutos/PreçosProdutos"
import OpçõesProdutos from "../../components/OpçõesProdutos/OpçõesProdutos"

function GerenciarEstoque() {
    const { id } = useParams();

    const [cadastro , setCadastro] = useState(true)
    const [tributação , setTributação] = useState(false)
    const [opções , setOpções] = useState(false)

    const [styleCadastro , setStyleCadastro] = useState({textDecoration: 'underline 3px #0295ff'})
    const [styleTributação , setStyleTributação] = useState({textDecoration: 'none'})
    const [styleOpções , setStyleOpções] = useState({textDecoration: 'none'})

    const render = (p) => {
        if(p == 'Cadastro') {
            setOpções(false)
            setTributação(false)
            setCadastro(true)

            setStyleCadastro({textDecoration: 'underline 3px #0295ff'})
            setStyleTributação({textDecoration: 'none'})
            setStyleOpções({textDecoration: 'none'})
        }
        if(p == 'Tributação') {
            setOpções(false)
            setTributação(true)
            setCadastro(false)

            setStyleCadastro({textDecoration: 'none'})
            setStyleTributação({textDecoration: 'underline 3px #0295ff'})
            setStyleOpções({textDecoration: 'none'})
        }
        if(p == 'Opções') {
            setOpções(true)
            setTributação(false)
            setCadastro(false)

            setStyleCadastro({textDecoration: 'none'})
            setStyleTributação({textDecoration: 'none'})
            setStyleOpções({textDecoration: 'underline 3px #0295ff'})
        }
    }
    
    return ( 
        <div id="gerenciarEstoque">
            <h2>Gerenciar Estoque</h2>
            <header className="HeaderClientesInfo">
                <p onClick={() => render('Cadastro')} className="bttRenderNovoProduto" style={styleCadastro}>Gerenciar Produto</p>
                <p onClick={() => render('Tributação')} className="bttRenderNovoProduto" style={styleTributação}>Gerenciar Estoque</p>
                <p onClick={() => render('Opções')} className="bttRenderNovoProduto" style={styleOpções}>Opções</p>
            </header>
            {
                cadastro && (
                    <InfoGerenciarEstoque id={id}/>
                ) ||
                tributação && (
                    <PreçosProdutos id={id}/>
                ) ||
                opções && (
                    <OpçõesProdutos id={id}/>
                )
            }
        </div>
    );
}

export default GerenciarEstoque;