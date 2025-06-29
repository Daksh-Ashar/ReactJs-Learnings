import { useLocation } from "react-router-dom";
import { usePlaygroundOperations } from "../hooks/usePlaygroundOperations";
import { useResult } from "../hooks/useResult";

export const Result = () => {
    const Location = useLocation();
    const ResultData = Location.state || {};
    const {resetGame} = usePlaygroundOperations();
    const {resetAndRedirect, returnToHome} = useResult({ResultData,resetGame});
     return (
        <>
            <div className="ResultCnt">
                <div className="ResultStatusCnt">
                    <center>{ResultData?.status == 1 ?  "Winner !!" : ResultData?.status == 2 ?  "Time Up !!" : ""}</center>
                </div>
                <div className="ResultScoreLabel">
                    <center>Your Score</center>
                </div>
                <div className="ResultScoreValue">
                    <center>{ResultData?.score || 0}</center>
                </div>
                <div className="ResultBtns">
                    <button className="ResetBtns" onClick={resetAndRedirect}>Play Again</button> 
                    <button className="leftSpacing ResetBtns" onClick={returnToHome}>Home</button>
                </div>
            </div>
            
        </>
     )
    }