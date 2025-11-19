import React, { useState } from 'react';
import './index.css';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';

function App() {
    const [currentPage, setCurrentPage] = useState('start');
    const [gameResult, setGameResult] = useState(null);

    const handleStartGame = () => {
        setGameResult(null);
        setCurrentPage('game');
    };

    const handleGameEnd = (result) => {
        setGameResult(result);
        setCurrentPage('results');
    };

    const handlePlayAgain = () => {
        setCurrentPage('start');
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'start':
                return <StartPage onStartGame={handleStartGame} />;
            case 'game':
                return <GamePage onGameEnd={handleGameEnd} />;
            case 'results':
                return <ResultsPage result={gameResult} onPlayAgain={handlePlayAgain} />;
            default:
                return <StartPage onStartGame={handleStartGame} />;
        }
    };

    return (
        <div className="App">
            <main>{renderPage()}</main>
        </div>
    );
}

export default App;