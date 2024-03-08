import { Card } from "../Components/Card";
import { productList } from "../Config/data";
import { useCartContext } from "../Hooks/useCartContext";

export const Home = () => {
    const cartContext = useCartContext();
    return (
        <>
            <div>
                Items List:
            </div>
            { productList?.map((item) => {
                    return (<Card record={item} setItems={cartContext.setItems}/>)
                })
            }

            <div>
                Cart Items:
            </div>
        </>
        )
}