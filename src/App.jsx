import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import ScoreboardPage from './pages/ScoreboardPage/ScoreboardPage';
import './index.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/game/:id" element={<GamePage />} />
                    <Route path="/scoreboard" element={<ScoreboardPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;