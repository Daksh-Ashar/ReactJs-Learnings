import "../style.css";
import { globalConstants } from "../globalConstants";
import { useCardAction } from "../Hooks/useCardAction";

export const CartItem = ({record}) => {
    const {onRemove} = useCardAction()
    return (
        <>
        <div className="card-container">
            <div>{record.name}</div>
            <div>Rs. {record.price}</div>
            <button onClick={() => {onRemove(record)}}>{globalConstants.REMOVE_FROM_CART_TEXT}</button>
        </div>
        </>
    )
}