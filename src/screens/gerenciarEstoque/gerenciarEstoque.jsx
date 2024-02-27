import "./gerenciarEstoque.css"
import { useState , useEffect } from "react";
import fetchapi from "../../api/fetchapi";
import Select from "react-select";
import Loading from "../../components/AçãoRealizada/AçãoRealizada"
import services from "../../services/services"

import InfoGerenciarEstoque from "../../components/InfoGerenciarEstoque/InfoGerenciarEstoque"
import PreçosProdutos from "../../components/PreçosProdutos/PreçosProdutos"
import FornecedoresProdutos from "../../components/FornecedoresProdutos/FornecedoresProdutos"
import OpçõesProdutos from "../../components/OpçõesProdutos/OpçõesProdutos"

function GerenciarEstoque() {
    const [resultProdutos , setResultProdutos] = useState([])
    const [loading , setloading] = useState(true)
    const [produto , setProduto] = useState()
    const [preçovenda , setPreçovenda] = useState()
    const [emestoque , setEmestoque] = useState()
    const [preçocompra , setPreçocompra] = useState()
    const [comição , setComição] = useState()
    const [margem , setMargem] = useState()
    const [proutoArray , setProdutoArray] = useState()

    const [cadastro , setCadastro] = useState(false)
    const [tributação , setTributação] = useState(false)
    const [fornecedores , setFornecedores] = useState(false)
    const [opções , setOpções] = useState(false)

    const [openedSelect , setOpenedSelect] = useState(true)

    const [styleCadastro , setStyleCadastro] = useState({textDecoration: 'underline 3px #0295ff'})
    const [styleTributação , setStyleTributação] = useState({textDecoration: 'none'})
    const [styleFornecedores , setStyleFornecedores] = useState({textDecoration: 'none'})
    const [styleOpções , setStyleOpções] = useState({textDecoration: 'none'})


    const [iD , setId] = useState()

    useEffect(() => {
        fetchapi.ProcurarProdutos('all').then((response) => {
            setResultProdutos(response)
            setloading(false)
        })
    }, [])

    const optionsProdutos = []

    resultProdutos.map((resultProdutos) => {
    optionsProdutos.push({
        value : resultProdutos.id,
        label : resultProdutos.produto})})

    const renderInfoProduto = async (e) => {
        setloading(true)
        setId(e.value)
        const infoClient = await fetchapi.ProcurarProdutosId(e.value)
        const {
            produto,
            preçodevenda,
            emestoque,
            preçocompra,
            margem,
            comição
        } = infoClient[0]
        setProdutoArray(infoClient[0])
        setProduto(produto)
        setPreçovenda(preçodevenda)
        setEmestoque(emestoque)
        setloading(false)
        setPreçocompra(preçocompra)
        setComição(comição)
        setMargem(margem)
            
    }

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
        <div id="gerenciarEstoque">
            <h2>Gerenciar Estoque</h2>
            <header className="HeaderClientesInfo">
                <p onClick={() => render('Cadastro')} className="bttRenderNovoProduto" style={styleCadastro}>Gerenciar Produto</p>
                <p onClick={() => render('Tributação')} className="bttRenderNovoProduto" style={styleTributação}>Gerenciar Preços</p>
                <p onClick={() => render('Fornecedores')} className="bttRenderNovoProduto" style={styleFornecedores}>Gerenciar Estoque</p>
                <p onClick={() => render('Opções')} className="bttRenderNovoProduto" style={styleOpções}>Opções</p>
            </header>
            {loading && <Loading/> ||
                openedSelect &&
                    <div className="inputGerenciarEstoque">
                        <Select
                        className="SelectProductGerenciarEstoque"
                        options={optionsProdutos}
                        onChange={(e) => renderInfoProduto(e)}
                        placeholder="Produto..."
                        />
                        <h2>{produto}</h2>
                        <p><strong>Preço de compra: </strong>{services.formatarCurrency(preçocompra)}</p>
                        <p><strong>margem: </strong>{margem}</p>
                        <p><strong>Preço de venda: </strong>{services.formatarCurrency(preçovenda)}</p>
                        <p><strong>em estoque: </strong>{emestoque}</p>
                        <p><strong>Comição: </strong>{comição}</p>
                        <button className="SelecionarProdutoGerenciarEstoque" onClick={() => {setOpenedSelect(false); setCadastro(true)}}>Selecionar</button>
                    </div>
                    ||
                     
                    cadastro && (
                        <InfoGerenciarEstoque data={proutoArray}/>
                    ) ||
                    tributação && (
                        <PreçosProdutos data={proutoArray}/>
                    ) ||
                    fornecedores && (
                        <FornecedoresProdutos data={proutoArray}/>
                    ) ||
                    opções && (
                        <OpçõesProdutos data={proutoArray}/>
                    )
                    
    }
        </div>
    );
}

export default GerenciarEstoque;