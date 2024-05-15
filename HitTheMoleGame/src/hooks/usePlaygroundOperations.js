import { useEffect, useState } from "react";

export const usePlaygroundOperations = () => {

const [moles,setMoles] = useState(new Array(9).fill(false));
const [score,setScore] = useState(0);
const [status,setStatus] = useState(false);

useEffect(()=>{
    try{
        let interval = setInterval(()=>{
            const randomPosition = Math.floor(Math.random() * moles.length);
            setMoleVisiblity(randomPosition,true);
            setTimeout(() => {
                setMoleVisiblity(randomPosition,false);
            },500)
         },1000);

         if(score == 10)
         {
            interval ? clearInterval(interval) : "";
            setStatus(true);
         }
         
         return () => {
            interval ? clearInterval(interval) : "";
         }
     
    }catch(e){
        throw new Error(e);
    }
},[moles]);

const setMoleVisiblity = (index,isVisible) => {
    try{
        setMoles((currMole)=> {
            let newmole = [...currMole];
            newmole[index] = isVisible;
            return newmole
        });
    }catch(e){
        throw new Error(e);
    }
}

const hitTheMole = (index) => {
    try{
        if(moles[index])
        {
            setMoleVisiblity(index,false);
            setScore((prevVal) => {
                return ++prevVal;
            }
            )
        }else{
            return false;
        }
    }catch(e){
        throw new Error(e);
    }
}

return {
    moles: moles,
    score:score,
    hitTheMole:hitTheMole,
    status
}

}