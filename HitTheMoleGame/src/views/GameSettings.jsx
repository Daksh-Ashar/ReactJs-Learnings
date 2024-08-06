import { useState } from "react";
import { gameConfig } from "../Config/config";
import { useGameSettings } from "../hooks/useGameSettings"; 

export const GameSettings = ()=> {
    const [Level,setLevel] = useState("Easy")
    const [GapTime,setGapTime] = useState(1)
    const [MaxScore,setMaxScore] = useState(10)
    const [TimeLimit,setTimeLimit] = useState(10)

    const {updateConfig} = useGameSettings({Level,GapTime,MaxScore,TimeLimit});
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
                        <select id="Level" className={"confInput"} onChange={(e)=>{setLevel(e.target.value)}} value={Level}> 
                            {Object.keys(gameConfig?.Level).map((node) => {
                                    return <option value={node} key={node}>{node}</option>
                            }).filter(n=>n)}
                        </select>
                    </div>
                    <div className="ConfItems">
                        <div className="ConfLabel">GapTime</div>
                        <input type="number" className={"confInput"} onChange={(e)=>{setGapTime(e.target.value)}} value={GapTime} min={GapTime} max={"5"} step={"1"}></input>
                    </div>
                    <div className="ConfItems">
                        <div className="ConfLabel">MaxScore</div>
                        <input type="number" className={"confInput"} onChange={(e)=>{setMaxScore(e.target.value)}} value={MaxScore} min={GapTime} max={"100"} step={"1"}></input>
                    </div>
                    <div className="ConfItems">
                        <div className="ConfLabel">TimeLimit</div>
                        <input type="number" className={"confInput"} onChange={(e)=>{setTimeLimit(e.target.value)}} value={TimeLimit} min={GapTime} max={"30"} step={"1"}></input>
                    </div>
                    <div className="ConfItems">
                        <button className={"confUpdateInput"} onClick={(e)=>{updateConfig()}}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}