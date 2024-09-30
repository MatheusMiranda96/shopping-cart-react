import { useState } from "react";
import AppContext from "./AppContext";

function Provider({ children }) {

    const [products, setProducts] = useState([]);

    const value = {
        products,
        setProducts,
    }

    return ( 
        <AppContext.Provider value={ value } >
            {children}
        </AppContext.Provider>
     );
}

export default Provider;