import "./NovoFuncionario.css"

function NovoFuncionario() {
    return ( 
        <div id="NovoFuncionario">
            <h2>Novo Funcionario</h2>
            <div className="MainNewFuncionario">

                <div className="NomeCpfFuncionario">
                    <label className="LabelInfoFuncionario">
                        <strong>Nome</strong>
                        <input type="text" />
                    </label>

                    <label className="LabelInfoFuncionario">
                        <strong>CPF</strong>
                        <input type="text" />
                    </label>
                </div>
                    
                <label className="LabelInfoFuncionario">
                    <strong>Numero</strong>
                    <input type="text" />
                </label>

                <label className="LabelInfoFuncionario">
                    <strong>Contratação</strong>
                    <input type="date" />
                </label>

                <label className="LabelInfoFuncionario">
                    <strong>Cargo</strong>
                    <select></select>
                </label>

                <label className="LabelInfoFuncionario">
                    <strong>Email</strong>
                    <input type="text" />
                </label>
                <button>Lançar Contratação</button>
            </div>
        </div>
     );
}

export default NovoFuncionario;