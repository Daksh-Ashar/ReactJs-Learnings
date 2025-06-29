export const GameInfo = () => {
    return (
        <div className="info-container">
            <h1 className="info-title">🎯 Whack-a-Mole Game</h1>

            <p className="info-description">
                Welcome to the customizable <strong>Whack-a-Mole</strong> game! Test your reflexes in this fun and engaging challenge. Choose your difficulty level and see how many moles you can whack before time runs out!
            </p>

            <h2 className="info-subtitle">🛠️ Key Features</h2>
            <ul className="info-list">
                <li className="info-list-item"><strong>Custom Difficulty:</strong> Adjust mole appearance speed and game duration.</li>
                <li className="info-list-item"><strong>Responsive Design:</strong> Play seamlessly across devices (desktop, tablet, mobile).</li>
                <li className="info-list-item"><strong>Interactive Animations:</strong> Smooth mole movements and hit feedback.</li>
                <li className="info-list-item"><strong>State-Driven Logic:</strong> Real-time updates and score tracking using React state.</li>
                <li className="info-list-item"><strong>Fun UI/UX:</strong> Intuitive layout and playful graphics for maximum enjoyment.</li>
            </ul>

            <h2 className="info-subtitle">🚀 How to Play</h2>
            <ol className="info-steps">
                <li className="info-step">Select your difficulty level from the game menu.</li>
                <li className="info-step">Start the game and wait for moles to pop up.</li>
                <li className="info-step">Click/tap the mole as fast as you can before it disappears.</li>
                <li className="info-step">Try to achieve the highest score within the time limit!</li>
            </ol>

        </div>
    )
}