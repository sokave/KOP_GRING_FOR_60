import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import './index.css';

function App() {
    return (
        <GameProvider>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<StartPage />} />

                        <Route path="/game/:id" element={<GamePage />} />

                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </GameProvider>
    );
}

export default App;