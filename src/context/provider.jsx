import { useState } from "react";
import AppContext from "./AppContext";
import PropTypes from "prop-types"; // Corrigindo a importação para PropTypes com letra maiúscula

function Provider({ children }) {

    const valores = {

    };

    return ( 
        <AppContext.Provider value={valores}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;

Provider.propTypes = {
    children: PropTypes.any.isRequired // Corrigindo a definição de propTypes para PropTypes com letra maiúscula
};
