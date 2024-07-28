import { defaultStats } from "../Config/config";


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
