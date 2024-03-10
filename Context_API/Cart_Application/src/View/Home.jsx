import { Card } from "../Components/Card";
import { CartItem } from "../Components/CartItem";
import { productList } from "../Config/data";
import { useCartContext } from "../Hooks/useCartContext";
import "../style.css";

export const Home = () => {
    const cartContext = useCartContext();
    return (
        <>
        
            <div>
                <h4>Items List:</h4>
            </div>
            <div className="itemsList">
            { productList?.map((item,index) => {
                    return (<Card key={index} record={item}/>)
                })
            }
            </div>

            <div className="cartListHeader">
                    <h4>Cart Items:</h4>
            </div>
            <div className="cartSection">
                <div className="cartList">
                    { cartContext?.items.map((item,index) => {
                        return (<CartItem key={index} record={item}/>)
                    })
                    }
                </div>
                <div>
                    <h3>Total Amount:</h3>
                    <h3>Rs. {
                        cartContext.items.reduce((a,item)=> 
                        { 
                            return a + item.price
                        }, 0)
                    }</h3>
                </div>
            </div>
        </>
        )
}