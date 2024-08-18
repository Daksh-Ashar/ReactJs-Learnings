import { useCallback, useEffect, useState } from "react";
import HitMoleSound from "../resources/audio/HitMoleSound.mp3";
import { useLocation, useNavigate } from "react-router-dom";
import { getGameConfig, getStats, setStats } from "../Utils/utils";

export const usePlaygroundOperations = () => {
const Config = getGameConfig();
const Location = useLocation();
const [moles,setMoles] = useState(new Array(9).fill(false));
const [score,setScore] = useState(0);
const [status,setStatus] = useState(3);
const [Hstats,setHstats] = useState();
const [TimeLimit,setTimeLimit] = useState("00:00");
const [GintervalTime,setGintervalTime] = useState(false);
const [molegameConfig,setMoleGameConfig] = useState(Config?.[Location?.state?.level]);
const HitSound = new Audio(HitMoleSound);
const Navigate = useNavigate();
let Ginterval;
let interval;

const clearintervals = ()=>{
    try{
        interval ? clearInterval(interval) : "";
        Ginterval ? clearInterval(Ginterval) : "";
    }catch(error){
        throw new Error(error);
    }
}

let startTimer = (duration) => {
    try {
        var timer = duration * 60, minutes, seconds;
        Ginterval= setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        setTimeLimit(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
            clearintervals();
            setGintervalTime(true);
            setStatus(2);
            setStats(Location.state.level,score)
        }
    }, 1000);
    } catch (error) {
        clearintervals();
        throw new Error(error);
    }
}

useEffect(()=>{
    try {
        let gStates = getStats();
        setHstats(gStates[Location.state.level]?.MaxScore);
        return () => {
           clearInterval(Ginterval);
        }
    } catch (error) {
        clearintervals();
        throw new Error(error);
    }
},[]);

useEffect(()=>{
    try {
        if(molegameConfig)
        {
            startTimer(molegameConfig["TimeLimit"]);
        }
        
    } catch (error) {
        clearintervals();
        throw new Error(error);
    }
},[molegameConfig]);

useEffect(()=>{
    try{
         interval = setInterval(()=>{
            const randomPosition = Math.floor(Math.random() * moles.length);
            setMoleVisiblity(randomPosition,true);
            setTimeout(() => {
                setMoleVisiblity(randomPosition,false);
            },1000)
         },molegameConfig?.GapTime);

        
         if(score == molegameConfig?.MaxScore)
         {
            interval ? clearInterval(interval) : "";
            setStatus(1);
            setStats(Location.state.level,score);
         }
         
         return () => {
            interval ? clearInterval(interval) : "";
         }
     
    }catch(error){
        clearintervals();
        throw new Error(error);
    }
},[moles,molegameConfig,GintervalTime,score]);

useEffect(()=>{
    try {
        if(status != 3)
        {
            Navigate("/Result",{state:{status,score,level:Location.state.level}});
        }
        
    } catch (error) {
        clearintervals();
        throw new Error(error);
    }
},[status,score]);

const setMoleVisiblity = (index,isVisible) => {
    try{
        setMoles((currMole)=> {
            let newmole = [...currMole];
            newmole[index] = isVisible;
            return newmole
        });
    }catch(error){
        clearintervals();
        throw new Error(error);
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
    }catch(error){
        clearintervals();
        throw new Error(error);
    }
},[moles]);

const resetGame = ()=>{
    try{
        setMoles(new Array(9).fill(false));
        setScore(0);
        setStatus(3);
    }catch(error){
        throw new Error(error);
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