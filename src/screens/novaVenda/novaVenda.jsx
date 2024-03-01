import ProdutosNovaVenda from "../../components/ProdutosNovaVenda/ProdutosNovaVenda.jsx"

import fetchapi from "../../api/fetchapi.js";
import { useState , useEffect } from "react";
import services from "../../services/services.js"

import Select from "react-select";

import "./novaVenda.css"
import AçãoRealizada from "../../components/AçãoRealizada/AçãoRealizada.jsx";

function NovaVenda() {
    const Data = new Date()
    const log = `${Data.getUTCDate()}/${Data.getUTCMonth() + 1}/${Data.getUTCFullYear()}`

    const [resultProdutos , setResultProdutos] = useState([])
    const [resultClientes , setResultClientes] = useState([])
    const [loading , setloading] = useState(true)

    const [id , setId] = useState()
    const [nomeInfoClient , setNomeInfoClient] = useState("'NOME'")
    const [telefoneInfoClient , setTelefoneInfoClient] = useState("'TELEFONE'")
    const [idCliente , setIdCliente] = useState()

    const [desconto , setDesconto] = useState()
    const [quantidade , setQuantidade] = useState()
    const [pagamento , setPagamento] = useState()
    const [preçoComDesconto , setPreçoComDesconto] = useState(0)
    const [percem , setPercem] = useState(false)

    const [produto , setProduto] = useState("'Produto'")
    const [precovenda , setPreçovenda] = useState("'Preço'")
    const [emestoque , setEmestoque] = useState("'Em estoque'")

    const [venda , setVenda] = useState([])

    useEffect(() => {
        fetchapi.ProcurarCliente('all').then((response) => {
            setResultClientes(response)
            setloading(false)
        })
    }, [])

    useEffect(() => {
        fetchapi.ProcurarProdutos('all').then((response) => {
            setResultProdutos(response)
            setloading(false)
        })
    }, [])

    const optionsClientes = []

    resultClientes.map((resultClientes) => {
        optionsClientes.push({
                value : resultClientes.id,
                label : resultClientes.name})})

    const renderInfoClient = async (e) => {
        setloading(true)
        setId(e.value)
        const infoClient = await fetchapi.ProcurarClienteId(e.value)
        const {
            name,
            telefone,
            id
        } = infoClient[0]
        setNomeInfoClient(name)
        setIdCliente(id)
        setTelefoneInfoClient(telefone)
        setloading(false)

    }

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
            preçovenda,
            emestoque
        } = infoClient[0]
        setProduto(produto)
        setPreçovenda(+preçovenda)
        setEmestoque(emestoque)
        setloading(false)

    }

    const calcularPrice = () => {
        if(percem) {
            var preçodaporcentagem = (desconto / 100) * (precovenda * quantidade)
            var porcentagemPorcentagem = (precovenda * quantidade) - preçodaporcentagem
            setPreçoComDesconto(porcentagemPorcentagem)
        } else {
            var porcentagemReais = (precovenda * quantidade) - desconto
            setPreçoComDesconto(porcentagemReais)
        }
    }

    const LançarAVenda = () => {
        const objectVenda= {
            "Produto" : produto,
            "Quantidade" : quantidade,
            "Preço" : precovenda,
            "Desconto" : desconto,
        }
        setVenda([...venda , objectVenda])
        console.log(venda)
        setDesconto(0)
        setQuantidade(0)
        setPagamento('')
    }

    return ( 
        <div id="NOVAVENDA">
            <header>
                <h2>Nova Venda</h2>
                <p>{log}</p>
            </header>
            <main className="MainNovaVenda">
                <div>
                <div>
                {loading && <AçãoRealizada/> || (
                    <Select className="SelectNovaVenda" placeholder="Cliente" options={optionsClientes} onChange={(e) => renderInfoClient(e)}/>
                )}
                        <label className="NovaVendaLabel">
                            <p className="NovanVendaStrong"><strong>Nome:</strong></p>
                            <p>{nomeInfoClient}</p>
                        </label>
                        <label className="NovaVendaLabel">
                            <p className="NovanVendaStrong"><strong>Numero:</strong></p>
                            <p>{services.formatarNumeroCelular(telefoneInfoClient)}</p>
                        </label>
                    </div>
                    <Select className="SelectNovaVenda" placeholder="Produto" options={optionsProdutos} onChange={(e) => renderInfoProduto(e)}/>
                    <div className="DivisãoNovaVenda">
                        <div>
                            <label className="NovaVendaLabel">
                                <p className="NovanVendaStrong"><strong>Produto</strong></p>
                                <p>{produto}</p>
                            </label>
                            <label className="NovaVendaLabel">
                                <p className="NovanVendaStrong"><strong>Preço</strong></p>
                                <p>{services.formatarCurrency(precovenda)}</p>
                            </label>
                            <label className="NovaVendaLabel">
                                <p className="NovanVendaStrong"><strong>Em Estoque</strong></p>
                                <p>{emestoque}</p>
                            </label>
                        </div>
                        <div>
                            <label className="NovaVendaLabel">
                                <p className="NovanVendaStrong"><strong>Quantidade</strong></p>
                                <input type="number" onChange={(e) => setQuantidade(e.target.value)} value={quantidade}/>
                            </label>
                            <label className="NovaVendaLabel">
                                <p className="NovanVendaStrong"><strong>Desconto</strong></p>
                                <input type="number" onChange={(e) => setDesconto(e.target.value)} value={desconto}/>
                                <label>
                                    <input id="checkBoxNovaVenda" type="checkbox" checked={percem} onChange={() => setPercem(!percem)}/>
                                    <p>%</p>
                                </label>
                            </label>
                            <label className="NovaVendaLabel">
                                <p className="NovanVendaStrong"><strong>Meio de Pagamento</strong></p>
                                <select onChange={(e) => setPagamento(e.target.value)} value={pagamento}>
                                    <option value="MEIO DE PAGAMENTO">MEIO DE PAGAMENTO</option>
                                    <option value="PIX">PIX</option>
                                    <option value="CARTÃO DE CRÉDITO">CARTÃO DE CRÉDITO</option>
                                    <option value="CARTÃO DE DEBITO">CARTÃO DE DEBITO</option>
                                    <option value="DINHEIRO">DINHEIRO</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    
                    <button className="calcularNovaVenda" onClick={() => calcularPrice()}>Calcular</button>

                    <div className="PreçoNovaVenda">
                        <h1>Preço : {services.formatarCurrency(preçoComDesconto)}</h1>
                        <button className="lançarPreçoNovaVenda" onClick={() => LançarAVenda()}>Lançar</button>
                    </div>
                </div>
                <div className="ProdutosNovaVenda">
                    {venda.map((venda) => <ProdutosNovaVenda data={venda}/>)}
                    <button className="FaturarNovaVenda">Faturar</button>
                </div>
            </main>
        </div>
    );
}

export default NovaVenda;