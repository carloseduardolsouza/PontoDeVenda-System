import "./cadastrarProduto.css"

import { useState } from "react"

import CadastroProdutos from "../../components/CadastroProdutos/CadastroProdutos"
import TributaçãoProdutos from "../../components/TributaçãoProdutos/TributaçãoProdutos"
import FornecedoresProdutos from "../../components/FornecedoresProdutos/FornecedoresProdutos"
import OpçõesProdutos from "../../components/OpçõesProdutos/OpçõesProdutos"

function CadastrarProduto() {
    const [cadastro , setCadastro] = useState(true)
    const [tributação , setTributação] = useState(false)
    const [fornecedores , setFornecedores] = useState(false)
    const [opções , setOpções] = useState(false)

    const [styleCadastro , setStyleCadastro] = useState({textDecoration: 'underline 3px #0295ff'})
    const [styleTributação , setStyleTributação] = useState({textDecoration: 'none'})
    const [styleFornecedores , setStyleFornecedores] = useState({textDecoration: 'none'})
    const [styleOpções , setStyleOpções] = useState({textDecoration: 'none'})

    const render = (p) => {
        if(p == 'Cadastro') {
            setOpções(false)
            setFornecedores(false)
            setTributação(false)
            setCadastro(true)

            setStyleCadastro({textDecoration: 'underline 3px #0295ff'})
            setStyleTributação({textDecoration: 'none'})
            setStyleFornecedores({textDecoration: 'none'})
            setStyleOpções({textDecoration: 'none'})
        }
        if(p == 'Tributação') {
            setOpções(false)
            setFornecedores(false)
            setTributação(true)
            setCadastro(false)

            setStyleCadastro({textDecoration: 'none'})
            setStyleTributação({textDecoration: 'underline 3px #0295ff'})
            setStyleFornecedores({textDecoration: 'none'})
            setStyleOpções({textDecoration: 'none'})
        }
        if(p == 'Fornecedores') {
            setOpções(false)
            setFornecedores(true)
            setTributação(false)
            setCadastro(false)

            setStyleCadastro({textDecoration: 'none'})
            setStyleTributação({textDecoration: 'none'})
            setStyleFornecedores({textDecoration: 'underline 3px #0295ff'})
            setStyleOpções({textDecoration: 'none'})
        }
        if(p == 'Opções') {
            setOpções(true)
            setFornecedores(false)
            setTributação(false)
            setCadastro(false)

            setStyleCadastro({textDecoration: 'none'})
            setStyleTributação({textDecoration: 'none'})
            setStyleFornecedores({textDecoration: 'none'})
            setStyleOpções({textDecoration: 'underline 3px #0295ff'})
        }
    }

    return (
        <div id="cadastrarProduto">
        <h2>Detalhes Cliente</h2>
        <header className="HeaderClientesInfo">
            <p onClick={() => render('Cadastro')} className="bttRenderNovoProduto" style={styleCadastro}>Cadastro</p>
            <p onClick={() => render('Tributação')} className="bttRenderNovoProduto" style={styleTributação}>Tributação</p>
            <p onClick={() => render('Fornecedores')} className="bttRenderNovoProduto" style={styleFornecedores}>Fornecedores</p>
            <p onClick={() => render('Opções')} className="bttRenderNovoProduto" style={styleOpções}>Opções</p>
        </header>
        {cadastro && (
            <CadastroProdutos/>
        ) ||
        tributação && (
            <TributaçãoProdutos/>
        ) ||
        fornecedores && (
            <FornecedoresProdutos/>
        ) ||
        opções && (
            <OpçõesProdutos/>
        )}
    </div>
    );
}

export default CadastrarProduto;