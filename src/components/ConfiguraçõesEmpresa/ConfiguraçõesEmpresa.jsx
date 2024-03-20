import "./ConfiguraçõesEmpresa.css"
import { useState } from "react";

function ConfiguraçõesEmpresa() {
    const [editar , setEditar] = useState(false)

    const concluir = () => {
        setEditar(false)
    }
    return ( 
        <div id="ConfiguraçõesEmpresa">
            {editar && 
                <div>
                    <label className="displayFlexConfigEmpresa">
                        <p><strong>Nome: </strong></p>
                        <input type="text" value={"Lider Móveis"}/>
                    </label>

                    <label className="displayFlexConfigEmpresa">
                        <p><strong>CNPJ: </strong></p>
                        <input type="text" value={"00.000.000/0000-00"}/>
                    </label>

                    <label className="displayFlexConfigEmpresa">
                        <p><strong>Responsavel: </strong></p>
                        <input type="text" value={"Carlos Souza"}/>
                    </label>
                    <button className="ConfiguraçõesEmpresaEditarBtt" onClick={() => concluir()}>concluir</button>
                </div> ||
            <div>
                <p><strong>Nome: </strong>{"Lider Móveis"}</p>
                <p><strong>CNPJ: </strong>{'00.000.000/0000-00'}</p>
                <p><strong>Responsavel: </strong>{"Carlos Souza"}</p>
                <button className="ConfiguraçõesEmpresaEditarBtt" onClick={() => setEditar(true)}>Editar</button>
            </div>
            }
        </div>
     );
}

export default ConfiguraçõesEmpresa;