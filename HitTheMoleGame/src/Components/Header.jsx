import '../App.css'

function Header({score,Time,MaxScore}) {
  return (
            <div className="GameHeader">
                    <div className='GameTitle'>
                        <span>Whack A Mole</span>
                    </div>
                    <div className='GameStats'>
                        <div>
                            <h1>Game Stats</h1>
                        </div>
                        <div className='StatsinfoBackground'>
                            <span>Score :- {score}</span>
                        </div>
                        <div className='StatsinfoBackground'>
                            <span>Time :- {Time}</span>
                        </div>
                        <div className='StatsinfoBackground'>
                            <span>High Score :- {MaxScore}</span>
                        </div>
                    </div>
            </div>
  )
}

export default Header