import "./ConfiguraçõesEmpresa.css"

function ConfiguraçõesEmpresa() {
    return ( 
        <div id="ConfiguraçõesEmpresa">
            <div>
                <p><strong>Nome: </strong>{"Lider Móveis"}</p>
                <p><strong>CNPJ: </strong>{'00.000.000/0000-00'}</p>
                <p><strong>Responsavel: </strong>{"Carlos Souza"}</p>
                <button className="ConfiguraçõesEmpresaEditarBtt">Editar</button>
            </div>
        </div>
     );
}

export default ConfiguraçõesEmpresa;