import "./ApiDesativada.css"

import { useContext } from "react";
import AppContext from "../../context/AppContext"

function AçãoRealizada() {
    const {apiInativa} = useContext(AppContext)
    return (
        (apiInativa &&
            <div id="AçãoRealizada">
                <h1>API INATIVA</h1>
            </div>
            ) || (
                <></>
            )
    );
}

export default AçãoRealizada;