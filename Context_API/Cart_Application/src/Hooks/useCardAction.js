import { useCallback } from "react";
import { useCartContext } from "./useCartContext";

export const useCardAction = () => {
        const CartContext = useCartContext();

        const onAddToCart = useCallback((record) => {
            try{
                
                if(!isProductPresent(record.product_id))
                {
                    CartContext.setItems((prevItems)=> 
                    {
                        return [...prevItems,record]
                    });
                }else{
                    alert("Item already present in cart.")
                }
                
            }catch(e){
                console.log(e);
                throw  new Error (e);
            }
        },[CartContext.items]);

        const onRemove = useCallback((record)=> {
            try{
                let itemsList = CartContext?.items.filter((product)=> {
                    return product.product_id != record.product_id
                });
                CartContext.setItems(itemsList);
            }catch(e){
                console.log(e);
                throw  new Error (e);
            }
        })

        const isProductPresent = (product_id) => {
            try{
                    let cartItems = CartContext?.items || []; 
                    if(cartItems?.length > 0)
                    {
                        let isPresent = false;
                        cartItems.forEach((product,index)=> {
                            if(product.product_id === product_id)
                            {
                                isPresent = true;
                            }
                        })
                        return isPresent;
                    }

            }catch(e){
                console.log(e);
                throw  new Error (e);
            }
        }
        return {
            onAddToCart,
            onRemove
        }
    
}