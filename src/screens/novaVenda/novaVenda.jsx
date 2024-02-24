import ProdutosNovaVenda from "../../components/ProdutosNovaVenda/ProdutosNovaVenda.jsx"

import fetchapi from "../../api/fetchapi.js";
import { useState , useEffect } from "react";

import Select from "react-select";

import "./novaVenda.css"
import AçãoRealizada from "../../components/AçãoRealizada/AçãoRealizada.jsx";

function NovaVenda() {
    const Data = new Date()
    const log = `${Data.getUTCDate()}/${Data.getUTCMonth() + 1}/${Data.getUTCFullYear()}`

    const [resultClientes , setResultClientes] = useState([])
    const [loadingClientes , setloadingClientes] = useState(true)

    const [id , setId] = useState()
    const [nomeInfoClient , setNomeInfoClient] = useState("'NOME'")
    const [telefoneInfoClient , setTelefoneInfoClient] = useState("'TELEFONE'")

    useEffect(() => {
        fetchapi.ProcurarCliente('all').then((response) => {
            setResultClientes(response)
            setloadingClientes(false)
        })
    }, [])

    const options = []

    resultClientes.map((resultClientes) => {
        options.push({
                value : resultClientes.id,
                label : resultClientes.name})})

    const renderInfoClient = async (e) => {
        setloadingClientes(true)
        setId(e.value)
        const infoClient = await fetchapi.ProcurarClienteId(e.value)
        const {
            name,
            telefone
        } = infoClient[0]
        setNomeInfoClient(name)
        setTelefoneInfoClient(telefone)
        setloadingClientes(false)

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
                {loadingClientes && <AçãoRealizada/> || (
                    <Select className="SelectNovaVenda" placeholder="Cliente" options={options} onChange={(e) => renderInfoClient(e)}/>
                )}
                        <label className="NovaVendaLabel">
                            <p className="NovanVendaStrong"><strong>Nome:</strong></p>
                            <p>{nomeInfoClient}</p>
                        </label>
                        <label className="NovaVendaLabel">
                            <p className="NovanVendaStrong"><strong>Numero:</strong></p>
                            <p>{telefoneInfoClient}</p>
                        </label>
                    </div>
                    <Select className="SelectNovaVenda" placeholder="Produto"/>
                    <div className="DivisãoNovaVenda">
                        <div>
                            <label className="NovaVendaLabel">
                                <p className="NovanVendaStrong"><strong>Produto</strong></p>
                                <p>{"Comoda Dhara"}</p>
                            </label>
                            <label className="NovaVendaLabel">
                                <p className="NovanVendaStrong"><strong>Preço</strong></p>
                                <p>{"R$ 550,00"}</p>
                            </label>
                            <label className="NovaVendaLabel">
                                <p className="NovanVendaStrong"><strong>Em Estoque</strong></p>
                                <p>{"10 unidades"}</p>
                            </label>
                        </div>
                        <div>
                            <label className="NovaVendaLabel">
                                <p className="NovanVendaStrong"><strong>Desconto</strong></p>
                                <input type="number" />
                            </label>
                            <label className="NovaVendaLabel">
                                <p className="NovanVendaStrong"><strong>Quantidade</strong></p>
                                <input type="number" />
                            </label>
                            <label className="NovaVendaLabel">
                                <p className="NovanVendaStrong"><strong>Meio de Pagamento</strong></p>
                                <select>
                                    <option value="MEIO DE PAGAMENTO">MEIO DE PAGAMENTO</option>
                                    <option value="PIX">PIX</option>
                                    <option value="CARTÃO DE CRÉDITO">CARTÃO DE CRÉDITO</option>
                                    <option value="CARTÃO DE DEBITO">CARTÃO DE DEBITO</option>
                                    <option value="DINHEIRO">DINHEIRO</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    
                    <button className="calcularNovaVenda">Calcular</button>

                    <div className="PreçoNovaVenda">
                        <h1>Preço : {"R$ 1.340,00"}</h1>
                        <button className="lançarPreçoNovaVenda">Lançar</button>
                    </div>
                </div>
                <div className="ProdutosNovaVenda">
                    <ProdutosNovaVenda/>
                    <button className="FaturarNovaVenda">Faturar</button>
                </div>
            </main>
        </div>
    );
}

export default NovaVenda;