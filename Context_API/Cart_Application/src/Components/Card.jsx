import "../style.css";
import { globalConstants } from "../globalConstants";
import { useCardAction } from "../Hooks/useCardAction";

export const Card = ({record}) => {
    const {onAddToCart} = useCardAction()
    return (
        <>
        <div className="card-container">
            <div>{record.name}</div>
            <div>Price : Rs. {record.price}</div>
            <button onClick={() => {onAddToCart(record)}}>{globalConstants.ADD_TO_CART_TEXT}</button>
        </div>
        </>
    )
}