import { defaultgameConfig, defaultStats } from "../Config/config";


export const setStats = (level,score) => {
    try{
        let stats = localStorage.getItem("gameStats") ? JSON.parse(localStorage.getItem("gameStats")) : defaultStats;
        let newStats = {...stats}
        newStats[level] = {
            "MaxScore":score
            }
        localStorage.setItem("gameStats",JSON.stringify(newStats));
    }catch(error){
        console.log(error);
    }
}

export const getStats = () => {
    try {
        let stats = localStorage.getItem("gameStats") ? JSON.parse(localStorage.getItem("gameStats")) : defaultStats;
        return stats;
    } catch (error) {
        console.log(error);
    }
}

export const getGameConfig = () => {
    try {
        let gameConfig = localStorage.hasOwnProperty("gameConfig") ? JSON.parse(localStorage.getItem("gameConfig")) : defaultgameConfig;
        return gameConfig;
    } catch (error) {
        console.log(error);
    }
}

export const getdefaultMinValueConfig = (Level) => {
    try {
        let gameConfig = defaultgameConfig[Level];
        gameConfig["GapTime"] = gameConfig["GapTime"]/1000;
        return gameConfig;
    } catch (error) {
        console.log(error);
    }
}

