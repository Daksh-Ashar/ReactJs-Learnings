import WithMole from "../resources/images/WithMole.png";
import WithoutMole from "../resources/images/WithoutMole.png";
import { useHomeScreenHook } from "../hooks/useHomeScreenHook";

export const HomeScreen = () => {

    const {LoadGameBoard} = useHomeScreenHook();

    return (
        <div className="HomeCnt">
            <div className="HomeGameImg">
                <center><span>Whack a Mole</span></center>
                <div className="HeroSection">
                    <div>
                        <img src={WithMole} alt="Mole" className="MoleImg"/>
                    </div>
                    <div>
                        <img src={WithoutMole} alt="Without Mole" className="withoutMoleImg"/>
                    </div>
                </div>
            </div>
            <div className="HomeActionBtns">
                <div className="GameStartSection">
                    <span className="GameTitle">Whack A Mole</span>

                    <div className="LevelSection">
                        <span>Choose level</span>         
                        <button onClick={(e) => {LoadGameBoard(e.target.value)}} value="Easy">Easy</button>
                        <button onClick={(e) => {LoadGameBoard(e.target.value)}} value="Medium">Medium</button>
                        <button onClick={(e) => {LoadGameBoard(e.target.value)}} value="Hard">Hard</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

