import { useCallback, useEffect, useState } from "react";
import HitMoleSound from "../resources/audio/HitMoleSound.mp3";
import { useLocation } from "react-router-dom";
import { gameConfig } from "../Config/config";
import { getStats, setStats } from "../Utils/utils";

export const usePlaygroundOperations = () => {
const Location = useLocation();
const [moles,setMoles] = useState(new Array(9).fill(false));
const [score,setScore] = useState(0);
const [status,setStatus] = useState(3);
const [Hstats,setHstats] = useState();
const [TimeLimit,setTimeLimit] = useState("00:00");
const [GintervalTime,setGintervalTime] = useState(false);
const [molegameConfig,setMoleGameConfig] = useState();
let HitSound = new Audio(HitMoleSound);
let GT;


let startTimer = (duration) => {
    var timer = duration, minutes, seconds;
    let Ginterval= setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        setTimeLimit(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
            clearInterval(Ginterval)
        }
    }, 1000);
}

useEffect(()=>{
    setMoleGameConfig(gameConfig[Location.state.level]);
    let Time = 60000 * gameConfig[Location.state.level]["TimeLimit"];
    console.log(Time);
    let Ginterval = setInterval(()=>{
        if(!GintervalTime)
            {
                setGintervalTime(true);
              clearInterval(Ginterval);
            }
     },Time); 
     startTimer(gameConfig[Location.state.level]["TimeLimit"]*60);
     let gStates = getStats();
     setHstats(gStates[Location.state.level]?.MaxScore)
},[]);

useEffect(()=>{
    try{
        let interval = setInterval(()=>{
            const randomPosition = Math.floor(Math.random() * moles.length);
            setMoleVisiblity(randomPosition,true);
            setTimeout(() => {
                setMoleVisiblity(randomPosition,false);
            },1000)
         },molegameConfig?.GapTime);

         
         if(GintervalTime)
         {
            clearInterval(interval);
            setStatus(2);
            setStats(Location.state.level,score)
         }

         if(score == molegameConfig?.MaxScore)
         {
            interval ? clearInterval(interval) : "";
            setStatus(1);
            setStats(Location.state.level,score)
         }
         
         return () => {
            interval ? clearInterval(interval) : "";
         }
     
    }catch(e){
        throw new Error(e);
    }
},[moles,molegameConfig,GintervalTime,score]);

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

const hitTheMole = useCallback((index) => {
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
},[moles]);

const resetGame = ()=>{
    try{
        setMoles(new Array(9).fill(false));
        setScore(0);
        setStatus(3);
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
    resetGame,
    TimeLimit,
    Hstats
}

}