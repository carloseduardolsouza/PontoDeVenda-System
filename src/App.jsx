import { useState  } from "react";
import Provider from "./context/provider";

//Home
    import { GoHome } from "react-icons/go";
    import { GoHomeFill } from "react-icons/go";

//configurações
    import { BsGear } from "react-icons/bs";
    import { BsGearFill } from "react-icons/bs";

//menu
    import { RiMenu2Fill } from "react-icons/ri";

//vendas
    import { RiMoneyDollarCircleFill } from "react-icons/ri";
    import { RiMoneyDollarCircleLine } from "react-icons/ri";

//clientes
    import { FaUser } from "react-icons/fa6";
    import { FaRegUser } from "react-icons/fa6";

//produtos
    import { MdSell } from "react-icons/md";
    import { MdOutlineSell } from "react-icons/md";

//estoque
    import { BsBox2Fill } from "react-icons/bs";
    import { BsBox2 } from "react-icons/bs";

//contas a pagar
    import { FaMoneyBill1 } from "react-icons/fa6";
    import { FaRegMoneyBillAlt } from "react-icons/fa";

//estatísticas
    import { BsBarChartLineFill } from "react-icons/bs";
    import { BsBarChartLine } from "react-icons/bs";

//Caixa
    import { FaCashRegister } from "react-icons/fa6";

import  "./menu.css"
import { BrowserRouter as Router, Link ,Route , Routes } from 'react-router-dom';

import "./App.css"

import Vendas from "./screens/vendas/vendas";
import Clientes from "./screens/clientes/clientes";
import Produtos from "./screens/produtos/produtos";
import novaVenda from "./screens/novaVenda/novaVenda";
import novoCliente from "./screens/novoCliente/novoCliente";
import cadastrarProduto from "./screens/cadastrarProduto/cadastrarProduto"
import detalhesClientes from "./screens/detalhesClientes/detalhesClientes";
import estoques from "./screens/estoque/estoque"
import detalhesProdutos from "./screens/detalhesProdutos/detalhesProdutos";
import gerenciarEstoque from "./screens/gerenciarEstoque/gerenciarEstoque";
import contasaPagar from "./screens/contasPagar/contasPagar"
import caixaa from "./screens/caixa/caixa"
import estatísticass from "./screens/estatísticas/estatísticas"
import configurações from "./screens/configurações/configurações"
import detalhesVendas from "./screens/detalhesVendas/detalhesVendas";
import detalhesGerenciarEstoque from "./screens/detalhesGerenciarEstoque/detalhesGerenciarEstoque";
import Homescreen from "./screens/Homescreen/Homescreen";
import gerenciarFuncionarios from "./screens/gerenciarFuncionarios/gerenciarFuncionarios";
import fornecedores from "./screens/fornecedores/fornecedores";
import detalhesFuncionarios from "./screens/detalhesFuncionarios/detalhesFuncionarios";


function App() {

    const [home , setHome] = useState(true)
    const [vendas , setVendas] = useState(false)
    const [clientes , setClientes] = useState(false)
    const [produtos , setProdutos] = useState(false)
    const [estoque , setEstoque] = useState(false)
    const [contasPagar , setContasPagar] = useState(false)
    const [estatísticas , setEstatísticas] = useState(false)
    const [caixa , setCaixa] = useState(false)
    const [configs , setConfigs] = useState(false)

    const [windowWidth , setWindowWidth] = useState('45px')
    const [windowDisplay , setWindowDisplay] = useState('none')

    const style = {
        display: windowDisplay
    }

    const [menuOpened , setMenuOpened] = useState(false)

    const menuOpen = () => {
        if(menuOpened == true) {
            setWindowDisplay('none')
            setWindowWidth('45px')
            setMenuOpened(false)
        }

        if(menuOpened == false){
            setWindowDisplay('block')
            setWindowWidth('160px')
            setMenuOpened(true)
        }
    }

  return (
    <Provider>
    <div className="App">
      <Router>
      <div className="MenuLateralBoxArea" style={{width: windowWidth}}>
            <div className="MenuLateralBox Outline" onClick={() => menuOpen()}>
                <RiMenu2Fill className="iconsMenuLateral"/>
            </div>
            <Link to="/" className="MenuLateralBox" onClick={() => {
                setVendas(false)
                setHome(true)
                setClientes(false)
                setProdutos(false)
                setEstoque(false)
                setContasPagar(false)
                setEstatísticas(false)
                setCaixa(false)
                setConfigs(false)
            }}>
                {(home && <GoHomeFill className="iconsMenuLateral"/>) || (
                    <GoHome className="iconsMenuLateral"/>
                    )}
                <p style={style}>Home</p>
            </Link>
            <Link to="/vendas" className="MenuLateralBox" onClick={() => {
                setVendas(true)
                setClientes(false)
                setHome(false)
                setProdutos(false)
                setEstoque(false)
                setContasPagar(false)
                setEstatísticas(false)
                setCaixa(false)
                setConfigs(false)
            }}>
                {(vendas && <RiMoneyDollarCircleFill className="iconsMenuLateral"/>) || (
                    <RiMoneyDollarCircleLine className="iconsMenuLateral"/>
                    )}
                <p style={style}>Vendas</p>
            </Link>
            <Link to="/clientes" className="MenuLateralBox"  onClick={() => {
                setVendas(false)
                setClientes(true)
                setProdutos(false)
                setEstoque(false)
                setHome(false)
                setContasPagar(false)
                setEstatísticas(false)
                setCaixa(false)
                setConfigs(false)
            }}>
                {(clientes && <FaUser className="iconsMenuLateral"/>) || (
                    <FaRegUser className="iconsMenuLateral"/>
                    )}
                <p style={style}>clientes</p>
            </Link>
            <Link to="/produtos" className="MenuLateralBox" onClick={() => {
                setVendas(false)
                setClientes(false)
                setProdutos(true)
                setEstoque(false)
                setHome(false)
                setContasPagar(false)
                setEstatísticas(false)
                setCaixa(false)
                setConfigs(false)
            }}>
                {(produtos && <MdSell className="iconsMenuLateral"/>) || (
                    <MdOutlineSell className="iconsMenuLateral"/>
                    )}
                <p style={style}>produtos</p>
            </Link>
            <Link to="/estoque" className="MenuLateralBox" onClick={() => {
                setVendas(false)
                setClientes(false)
                setProdutos(false)
                setEstoque(true)
                setContasPagar(false)
                setEstatísticas(false)
                setHome(false)
                setCaixa(false)
                setConfigs(false)
            }}>
                {(estoque && <BsBox2Fill className="iconsMenuLateral"/>) || (
                    <BsBox2 className="iconsMenuLateral"/>
                    )}
                <p style={style}>Estoque</p>
            </Link>
            <Link to="/contasPagar" className="MenuLateralBox" onClick={() => {
                setVendas(false)
                setClientes(false)
                setProdutos(false)
                setHome(false)
                setEstoque(false)
                setContasPagar(true)
                setEstatísticas(false)
                setCaixa(false)
                setConfigs(false)
            }}>
                {(contasPagar && <FaMoneyBill1 className="iconsMenuLateral"/>) || (
                    <FaRegMoneyBillAlt className="iconsMenuLateral"/>
                    )}
                <p style={style}>Contas a pagar</p>
            </Link>
            <Link to="/caixa" className="MenuLateralBox" onClick={() => {
                setVendas(false)
                setClientes(false)
                setProdutos(false)
                setEstoque(false)
                setContasPagar(false)
                setEstatísticas(false)
                setHome(false)
                setCaixa(true)
                setConfigs(false)
            }}>
                {(caixa && <FaCashRegister className="iconsMenuLateral"/>) || (
                    <FaCashRegister className="iconsMenuLateral"/>
                    )}
                <p style={style}>Caixa</p>
            </Link>
            <Link to="/estatísticas" className="MenuLateralBox" onClick={() => {
                setVendas(false)
                setClientes(false)
                setProdutos(false)
                setHome(false)
                setEstoque(false)
                setContasPagar(false)
                setEstatísticas(true)
                setCaixa(false)
                setConfigs(false)
            }}>
                {(estatísticas && <BsBarChartLineFill className="iconsMenuLateral"/>) || (
                    <BsBarChartLine className="iconsMenuLateral"/>
                    )}
                <p style={style}>Estatísticas</p>
            </Link>

            <Link to="/configurações" className="MenuLateralBox Preferencias" onClick={() => {
                setVendas(false)
                setClientes(false)
                setProdutos(false)
                setEstoque(false)
                setHome(false)
                setContasPagar(false)
                setEstatísticas(false)
                setCaixa(false)
                setConfigs(true)
            }}>
                {(configs && <BsGearFill  className="iconsMenuLateral"/>) || (
                    <BsGear className="iconsMenuLateral"/>
                    )}
                <p style={style}>Preferencias</p>
            </Link>
            <div className="MenuLateralBox">
            </div>
        </div>
        <Routes>
          <Route path="/" Component={Homescreen}/>
          <Route path="/vendas" Component={Vendas}/>
          <Route path="/clientes" Component={Clientes}/>
          <Route path="/produtos" Component={Produtos} />
          <Route path="/novaVenda" Component={novaVenda} />
          <Route path="/novoCliente" Component={novoCliente} />
          <Route path="/detalhesClientes/:id" Component={detalhesClientes}/>
          <Route path="/cadastrarProduto" Component={cadastrarProduto}/>
          <Route path="/estoque" Component={estoques}/>
          <Route path="/detalhesProdutos/:id" Component={detalhesProdutos}/>
          <Route path="/gerenciarEstoque/:id" Component={gerenciarEstoque}/>
          <Route path="/contasPagar" Component={contasaPagar}/>
          <Route path="/caixa" Component={caixaa}/>
          <Route path="/estatísticas" Component={estatísticass}/>
          <Route path="/configurações" Component={configurações}/>
          <Route path="/detalhesVenda/:rastreio" Component={detalhesVendas}/>
          <Route path="/gerenciarFuncionarios" Component={gerenciarFuncionarios}/>
          <Route path="/detalhesGerenciarEstoqueReposição/:id" Component={detalhesGerenciarEstoque}/>
          <Route path="/fornecedores" Component={fornecedores}/>
          <Route path="/detalhesFuncionarios/:id" Component={detalhesFuncionarios}/>
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
