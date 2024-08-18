import { usePlaygroundOperations } from "../hooks/usePlaygroundOperations";
import '../App.css';
import Header from "../Components/Header";

export const PlayGround = () => {
const {moles,score,hitTheMole,molegameConfig,resetGame,TimeLimit,Hstats} = usePlaygroundOperations();

 return (
    <>
        <div className="GameBordCnt">
            <Header score={score} Time={TimeLimit} MaxScore={Hstats} />
            <div className="GameBoard">
            {
                moles.map((isMole,index)=>{
                    return (
                            <div className={"GroundHole"} onClick={() => {hitTheMole(index)}} key={index}> 
                                <div className={isMole ? 'mole' : 'hole'}></div>
                            </div>
                    );
                })
            }

            </div>
        </div>
    </>
 )
}

