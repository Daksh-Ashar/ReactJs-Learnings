import { useNavigate } from "react-router-dom";

export const useHomeScreenHook = () => {
    const Navigate = useNavigate();

    const LoadGameBoard = (level) => {
        try{
            Navigate('/playground',{state:{level}})
        }catch(e){
            console.log(e);
        }
    }
        return {
            LoadGameBoard
        }
}