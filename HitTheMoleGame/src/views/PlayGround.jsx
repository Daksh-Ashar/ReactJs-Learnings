import { usePlaygroundOperations } from "../hooks/usePlaygroundOperations";
import '../App.css';

export const PlayGround = () => {
const {moles,score,status,hitTheMole,molegameConfig,resetGame,TimeLimit,Hstats} = usePlaygroundOperations();

 return (
    <>
    <h2>Score: {score} {molegameConfig?.messages?.[status]} Time: {TimeLimit} HScore:{Hstats}</h2>
        <div className="GameBoard">
        {
            moles.map((isMole,index)=>{
                return (
                        <div className={isMole ? 'mole' : 'hole'} onClick={() => {hitTheMole(index)}} key={index}></div>
                );
            })
        }

        {score == molegameConfig?.MaxScore ? 
        <>
        <div>Winner</div>
        <button onClick={resetGame}>Play Again</button>
        </> : ""}
        </div>
    </>
 )
}

