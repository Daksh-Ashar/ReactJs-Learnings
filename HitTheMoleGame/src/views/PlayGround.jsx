import { usePlaygroundOperations } from "../hooks/usePlaygroundOperations";
import '../App.css';

export const PlayGround = () => {
const {moles,score,status,hitTheMole} = usePlaygroundOperations();

 return (
    <>
    <h2>Score: {score} {status ? "You won...": ""}</h2>
        <div className="GameBoard">
        {
            moles.map((isMole,index)=>{
                return (
                    <div className={isMole ? 'mole' : 'hole'} onClick={() => {hitTheMole(index)}} key={index}></div>
                );
            })
        }
        </div>
    </>
 )
}

