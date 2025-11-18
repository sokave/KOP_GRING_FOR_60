import React, { useState } from 'react';
import './index.css'; // Базові стилі

import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';

function App() {
    const [currentPage, setCurrentPage] = useState('start'); // варіанти: 'start', 'game', 'results'

    const handleStartGame = () => {
        setCurrentPage('game');
    };

    const handleGameEnd = () => {
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
                return <ResultsPage onPlayAgain={handlePlayAgain} />;
            default:
                return <StartPage onStartGame={handleStartGame} />;
        }
    };

    return (
        <div className="App">
            {/* 1 пейдж */}
            <main>
                {renderPage()}
            </main>
        </div>
    );
}

export default App;