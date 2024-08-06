export const useGameSettings = ({Level,GapTime,MaxScore,TimeLimit}) => {
    const onChangeData = () => {
        console.log("Config Changed")
    }
    const updateConfig = () => {
        console.log("Updated Config", {Level,GapTime,MaxScore,TimeLimit})
    }
        return {
            onChangeData,
            updateConfig
        }
}