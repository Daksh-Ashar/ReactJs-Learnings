import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([{"name":"test","price":100}]);
    const providerObj = {
        items,
        setItems
    }

    return (
        <CartContext.Provider value={providerObj}>
                {children}
        </CartContext.Provider>
    )
}