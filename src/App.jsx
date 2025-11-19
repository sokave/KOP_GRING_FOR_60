import React, { useState } from 'react';
import './index.css';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import { GameProvider } from './context/GameContext';

function App() {
    const [currentPage, setCurrentPage] = useState('start');
    const [gameResult, setGameResult] = useState(null);

    const handleStartGame = () => {
        setGameResult(null);
        setCurrentPage('game');
    };

    const handleGameEnd = (result) => {
        setGameResult(result);
        setCurrentPage('game');
    };

    const handlePlayAgain = () => {
        setCurrentPage('start');
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'start':
                return <StartPage onStartGame={handleStartGame} />;
            case 'game':
                return <GamePage onGameEnd={handleGameEnd} result={gameResult} />;
            default:
                return <StartPage onStartGame={handleStartGame} />;
        }
    };

    return (
        <GameProvider>
            <div className="App">
                <main>{renderPage()}</main>
            </div>
        </GameProvider>
    );
}

export default App;