import WithMole from "../resources/images/WithMole.png";
import WithoutMole from "../resources/images/WithoutMole.png";
import { useHomeScreenHook } from "../hooks/useHomeScreenHook";

export const HomeScreen = () => {

    const {LoadGameBoard,NavigateToScreen} = useHomeScreenHook();

    return (
        <div className="HomeCnt">
            <div className="HomeGameImg">
                <center><span>Whack a Mole</span></center>
                <div className="HeroSection">
                </div>
            </div>
            <div className="HomeActionBtns">
                <div className="HomeHeaderActionsBtns">
                    <div className="GameInfoBackground" onClick={()=>NavigateToScreen("/GameInfo")}></div>
                    <div className="GameSettings" onClick={()=>NavigateToScreen("/GameSettings")}></div>
                </div>
                <div className="GameStartSection">
                    <span className="GameTitle">Choose level</span> 

                    <div className="LevelSection">
                        <button onClick={(e) => {LoadGameBoard(e.target.value)}} value="Easy">Easy</button>
                        <button onClick={(e) => {LoadGameBoard(e.target.value)}} value="Medium">Medium</button>
                        <button onClick={(e) => {LoadGameBoard(e.target.value)}} value="Hard">Hard</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

