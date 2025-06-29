import { useCallback } from "react";
import { getdefaultMinValueConfig, getGameConfig } from "../Utils/utils"
import { toast } from "react-toastify";

export const useGameSettings = ({ Level, GapTime, MaxScore, TimeLimit, setLevel, setGapTime, setMaxScore, setTimeLimit, setDefaultMinValue }) => {

    const notify = (msg) => toast(msg);

    const updateConfig = useCallback(({ Config }) => {
        var gameConfig = getGameConfig();
        var level = Config.Level;
        var updateConfig = {};
        updateConfig[level] = { ...Config };
        updateConfig[level]["GapTime"] = GapTime * 1000;
        updateConfig[level]["TimeLimit"] = TimeLimit;
        updateConfig[level]["MaxScore"] = MaxScore;
        delete updateConfig[level].Level;
        localStorage.setItem("gameConfig", JSON.stringify({ ...gameConfig, ...updateConfig }))
        //alert("Config updated successfully")
        notify("Game settings updated successfully")
    }, [GapTime, TimeLimit, MaxScore])

    const onLevelChange = ({ Level }) => {
        try {
            var Config = getGameConfig();
            setLevel(Level)
            setGapTime(Config[Level].GapTime / 1000)
            setMaxScore(Config[Level].MaxScore)
            setTimeLimit(Config[Level].TimeLimit)
            var defaultMinValueConfig = getdefaultMinValueConfig(Level)
            setDefaultMinValue(defaultMinValueConfig)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        updateConfig,
        onLevelChange
    }
}