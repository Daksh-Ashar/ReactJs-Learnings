import { defaultgameConfig } from "../Config/config"
import { getdefaultMinValueConfig, getGameConfig } from "../Utils/utils"

export const useGameSettings = ({Level,GapTime,MaxScore,TimeLimit,setLevel,setGapTime,setMaxScore,setTimeLimit,setDefaultMinValue}) => {
    const onChangeData = () => {
        console.log("Config Changed")
    }
    const updateConfig = ({Config}) => {
        var gameConfig = getGameConfig();
        var level = Config.Level;
        var updateConfig = {};
        updateConfig[level] = {...Config};
        updateConfig[level]["GapTime"] = GapTime * 1000;
        delete updateConfig[level].Level;
        localStorage.setItem("gameConfig",JSON.stringify({...gameConfig,...updateConfig}))
        alert("Config updated successfully")
    }

    const onLevelChange = ({Level}) => {
        try {
            var Config = getGameConfig();
            setLevel(Level)
            setGapTime(Config[Level].GapTime/1000)
            setMaxScore(Config[Level].MaxScore)
            setTimeLimit(Config[Level].TimeLimit)
            var defaultMinValueConfig = getdefaultMinValueConfig(Level)
            setDefaultMinValue(defaultMinValueConfig)
        } catch (error) {
            console.log(error)
        }
    }

        return {
            onChangeData,
            updateConfig,
            onLevelChange
        }
}