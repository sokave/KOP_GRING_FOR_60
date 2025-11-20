import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Board from '../../components/Board/Board';
import Modal from '../../components/Modal/Modal';
import { useTicTac } from '../../hook/useTicTac';
import { useGame } from '../../context/GameContext';

const GamePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { squares, winner, isDraw, handleClick, status, resetGame } = useTicTac();
    const { settings, updateScore } = useGame();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const currentPlayerName = status.includes('Next player: X') ? settings.playerXName : settings.playerOName;
    const statusMessage = winner
        ? `Winner: ${winner === 'X' ? settings.playerXName : settings.playerOName}`
        : isDraw
            ? "It is a Draw!"
            : `Next player: ${currentPlayerName}`;

    useEffect(() => {
        if (winner || isDraw) {
            if (winner) updateScore(winner);
            setIsModalOpen(true);
        }
    }, [winner, isDraw, updateScore]);


    const handleNextTour = () => {
        setIsModalOpen(false);
        resetGame();
    };

    const handleNewGame = () => {
        setIsModalOpen(false);
        resetGame();
        navigate('/');
    };

    return (
        <div className="game-page">
            <p style={{color: '#888', fontSize: '0.8rem'}}>Session ID: {id}</p> {/* Показуємо ID */}
            <h2>{statusMessage}</h2>
            <Board squares={squares} onSquareClick={handleClick} />

            <Modal isOpen={isModalOpen} onClose={handleNewGame}>
                <h3>Game Over!</h3>
                <p>{statusMessage}</p>
                <button onClick={handleNextTour}>Next Tour</button>
                <button onClick={handleNewGame}>New Config</button>
            </Modal>
        </div>
    );
};

export default GamePage;