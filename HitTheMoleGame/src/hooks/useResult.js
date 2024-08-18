import { useNavigate } from "react-router-dom";

export const useResult = ({ResultData,resetGame}) => {
    const Navigate = useNavigate();

    const resetAndRedirect = () => {
        try{
            let level = ResultData.level;
            resetGame();
            Navigate('/playground',{state:{level}});
        }catch(error){
            console.log(error);
        }
    }

        return {
            resetAndRedirect
        }
}