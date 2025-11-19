import React, { useEffect } from 'react';
import Board from '../../components/Board/Board';
import { useTicTac } from '../../hook/useTicTac';

const GamePage = ({ onGameEnd }) => {
    const { squares, status, winner, isDraw, handleClick } = useTicTac();

    useEffect(() => {
        if (winner || isDraw) {
            const timer = setTimeout(() => {
                onGameEnd(winner || 'Draw');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [winner, isDraw, onGameEnd]);

    return (
        <div className="game-page">
            <h2>{status}</h2>
            <Board squares={squares} onSquareClick={handleClick} />
        </div>
    );
};

export default GamePage;