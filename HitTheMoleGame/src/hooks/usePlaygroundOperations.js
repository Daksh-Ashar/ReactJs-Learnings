import { useEffect, useState } from "react";
import HitMoleSound from "../resources/audio/HitMoleSound.mp3";
import { useLocation } from "react-router-dom";
import { gameConfig } from "../Config/config";

export const usePlaygroundOperations = () => {
const Location = useLocation();
const [moles,setMoles] = useState(new Array(9).fill(false));
const [score,setScore] = useState(0);
const [status,setStatus] = useState(false);
const [molegameConfig,setMoleGameConfig] = useState();
let HitSound = new Audio(HitMoleSound);

useEffect(()=>{
    setMoleGameConfig(gameConfig[Location.state.level])
},[]);

useEffect(()=>{
    try{
        let interval = setInterval(()=>{
            const randomPosition = Math.floor(Math.random() * moles.length);
            setMoleVisiblity(randomPosition,true);
            setTimeout(() => {
                setMoleVisiblity(randomPosition,false);
            },500)
         },molegameConfig?.GapTime);

         if(score == molegameConfig?.MaxScore)
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
},[moles,molegameConfig]);

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
            HitSound.play();
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

const resetGame = ()=>{
    try{
        setMoles(new Array(9).fill(false));
        setScore(0);
        setStatus(false);
    }catch(e){
        throw new Error(e);
    }
}

return {
    moles: moles,
    score:score,
    hitTheMole:hitTheMole,
    status,
    molegameConfig,
    resetGame
}

}