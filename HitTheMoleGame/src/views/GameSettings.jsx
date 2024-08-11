import { useState } from "react";
import { gameConfig } from "../Config/config";
import { useGameSettings } from "../hooks/useGameSettings"; 
import { getdefaultMinValueConfig, getGameConfig } from "../Utils/utils";

export const GameSettings = ()=> {
    const [Level,setLevel] = useState("Easy")
    const [GapTime,setGapTime] = useState(getGameConfig()["Easy"].GapTime/1000)
    const [MaxScore,setMaxScore] = useState(getGameConfig()["Easy"].MaxScore)
    const [TimeLimit,setTimeLimit] = useState(getGameConfig()["Easy"].TimeLimit)
    const [defaultMinValue,setDefaultMinValue] = useState(getdefaultMinValueConfig("Easy"))

    const {updateConfig,onLevelChange} = useGameSettings({Level,GapTime,MaxScore,TimeLimit,setLevel,setGapTime,setMaxScore,setTimeLimit,setDefaultMinValue});
    return (
        <div>
            <div className="GameSettingsHeader">
                Game Settings
            </div>
            <div className="GameSettingsCnt">

                <div className="ConfCnt">
                    <span className="ConfLevelName">Change Settings</span>
                    <div className="ConfItems">
                        <label htmlFor="Level" className="ConfLabel">Level</label>
                        <select id="Level" className={"confInput"} onChange={(e)=>{onLevelChange({Level:e.target.value})}} value={Level}> 
                            {Object.keys(gameConfig?.Level).map((node) => {
                                    return <option value={node} key={node}>{node}</option>
                            }).filter(n=>n)}
                        </select>
                    </div>
                    <div className="ConfItems">
                        <div className="ConfLabel">GapTime (Sec.)</div>
                        <input type="number" className={"confInput"} onChange={(e)=>{setGapTime(e.target.value)}} value={GapTime} min={defaultMinValue.GapTime} max={"5"} step={"1"}></input>
                    </div>
                    <div className="ConfItems">
                        <div className="ConfLabel">MaxScore</div>
                        <input type="number" className={"confInput"} onChange={(e)=>{setMaxScore(e.target.value)}} value={MaxScore} min={defaultMinValue.MaxScore} max={"100"} step={"1"}></input>
                    </div>
                    <div className="ConfItems">
                        <div className="ConfLabel">TimeLimit (Min.)</div>
                        <input type="number" className={"confInput"} onChange={(e)=>{setTimeLimit(e.target.value)}} value={TimeLimit} min={defaultMinValue.TimeLimit} max={"30"} step={"1"}></input>
                    </div>
                    <div className="ConfItems">
                        <button className={"confUpdateInput"} onClick={(e)=>{updateConfig({Config:{Level,GapTime,MaxScore,TimeLimit}})}}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}