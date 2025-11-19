import React, { createContext, useState, useContext } from 'react';

export const GameContext = createContext();

const initialSettings = {
    playerXName: 'Player X',
    playerOName: 'Player O',
    scoreX: 0,
    scoreO: 0,
};

export const GameProvider = ({ children }) => {
    const [settings, setSettings] = useState(() => {
        const savedSettings = localStorage.getItem('ticTacToeSettings');
        return savedSettings ? JSON.parse(savedSettings) : initialSettings;
    });

    const updateSettings = (newNames) => {
        const updated = { ...settings, ...newNames };
        setSettings(updated);
        localStorage.setItem('ticTacToeSettings', JSON.stringify(updated));
    };

    const updateScore = (winner) => {
        setSettings(prev => {
            let newScoreX = prev.scoreX;
            let newScoreO = prev.scoreO;

            if (winner === 'X') {
                newScoreX += 1;
            } else if (winner === 'O') {
                newScoreO += 1;
            }

            const updated = { ...prev, scoreX: newScoreX, scoreO: newScoreO };
            localStorage.setItem('ticTacToeSettings', JSON.stringify(updated));
            return updated;
        });
    };

    const resetScore = () => {
        const updated = { ...settings, scoreX: 0, scoreO: 0 };
        setSettings(updated);
        localStorage.setItem('ticTacToeSettings', JSON.stringify(updated));
    };

    const value = {
        settings,
        updateSettings,
        updateScore,
        resetScore,
    };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
    return useContext(GameContext);
};