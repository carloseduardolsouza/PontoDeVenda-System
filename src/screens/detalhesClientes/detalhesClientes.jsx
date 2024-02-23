import "./detalhesClientes.css"

import { useParams } from 'react-router-dom';

import INFOclientes from "../../components/INFOclientes/INFOclientes";
import ExtratoClientes from "../../components/extratoCliente/extratoCliente"
import TransaçõesClientes from "../../components/transaçõesClientes/transaçõesClientes"

import ProcurarClienteId from "../../api/fetchapi"

import Loading from "../../components/AçãoRealizada/AçãoRealizada"

import { useEffect, useState } from "react";

function DetalhesClientes() {
    const { id } = useParams();

    const [INFOcliente , setINFOcliente] = useState(true)
    const [extratoCliente , setExtratoCliente] = useState(false)
    const [transações , setTransações] = useState(false)

    const [styleDetalhes , setStyleDetalhes] = useState({textDecoration: 'underline 3px #0295ff'})
    const [styleExtratoCliente , setStyleExtratoCliente] = useState({textDecoration: 'none'})
    const [styleTransações , setstyleTransações] = useState({textDecoration: 'none'})

    const [resultClientesDetalhes , setResultClientesDetalhes] = useState([])
    const [loadingClientesDetalhes , setloadingClientesDetalhes] = useState(true)

    const render = (p) => {
        if(p == 'Detalhes') {
            setExtratoCliente(false)
            setTransações(false)
            setINFOcliente(true)
            setStyleDetalhes({textDecoration: 'underline 3px #0295ff'})
            setStyleExtratoCliente({textDecoration: 'none'})
            setstyleTransações({textDecoration: 'none'})
        }
        if(p == 'extratoCliente') {
            setINFOcliente(false)
            setTransações(false)
            setExtratoCliente(true)
            setStyleDetalhes({textDecoration: 'none'})
            setStyleExtratoCliente({textDecoration: 'underline 3px #0295ff'})
            setstyleTransações({textDecoration: 'none'})
        }
        if(p == 'Transações') {
            setINFOcliente(false)
            setExtratoCliente(false)
            setTransações(true)
            setStyleDetalhes({textDecoration: 'none'})
            setStyleExtratoCliente({textDecoration: 'none'})
            setstyleTransações({textDecoration: 'underline 3px #0295ff'})
        }
    }

    useEffect(() => {
        ProcurarClienteId.ProcurarClienteId(id).then((response) => {
            setResultClientesDetalhes(response)
            setloadingClientesDetalhes(false)
        })
    }, [])
    console.log(resultClientesDetalhes)

    return ( 
        <div id="DETALHESCLIENTES">
            <h2>Detalhes Cliente</h2>
            <header className="HeaderClientesInfo">
                <p onClick={() => render('Detalhes')} className="bttRenderInfoClientes" style={styleDetalhes}>Detalhes</p>
                <p onClick={() => render('extratoCliente')} className="bttRenderInfoClientes" style={styleExtratoCliente}>Extrato de fidelidade</p>
                <p onClick={() => render('Transações')} className="bttRenderInfoClientes" style={styleTransações}>Transações</p>
            </header>
            {INFOcliente && (
                loadingClientesDetalhes && (
                    <Loading/>
                ) || (
                    <INFOclientes data={resultClientesDetalhes[0]}/>
                )
            ) ||
            extratoCliente && (
                <ExtratoClientes/>
            ) ||
            transações && (
                <TransaçõesClientes/>
            )}
        </div>
    );
}

export default DetalhesClientes;