import { useState } from "react";
import AppContext from "./AppContext";
import propTypes from "prop-types"

function Provider({children}) {

    const valores = {
        
    }
    return ( 
        <AppContext.Provider value={valores}>
            {children}
        </AppContext.Provider>
     );
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any
}.isRequired