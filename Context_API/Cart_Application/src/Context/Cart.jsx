import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);
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