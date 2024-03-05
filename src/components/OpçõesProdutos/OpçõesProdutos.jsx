import "./OpçõesProdutos.css"

import { useState } from "react";

function OpçõesProdutos() {
    const [edit , setEdit] = useState(false)
    return ( 
        <div >
            {edit && 
            <div className="editOpçõesProdutosTrue">
                <label>
                    <strong>Estoque minimo:</strong>
                    <input type="text" />
                </label>

                <label>
                    <strong>Comição para o vendedor:</strong>
                    <input type="text" />
                </label>

                <button onClick={() => setEdit(false)}>Concluir</button>
            </div> || 
            <div className="editOpçõesProdutosFalse">
                <p><strong>Estoque minimo:  </strong>{"30 unidades"}</p>
                <p><strong>Comição para o vendedor: </strong>{"3%"}</p>
                <button onClick={() => setEdit(true)}>Editar</button>
            </div>
            }
        </div>
     );
}

export default OpçõesProdutos;