import { CartContext } from "../Context/Cart";
import { useContext } from "react";

export const useCartContext = () => {
    try{
        const  cartContext = useContext(CartContext);
        return cartContext;
    }catch(e){
        console.log(e);
        throw new Error(e);
    }
}