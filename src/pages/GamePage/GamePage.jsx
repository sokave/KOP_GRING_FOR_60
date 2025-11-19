import React, { useState, useEffect } from 'react';
import Board from '../../components/Board/Board';
import Modal from '../../components/Modal/Modal';
import { useTicTac } from '../../hook/useTicTac';
import { useGame } from '../../context/GameContext';

const GamePage = ({ onGameEnd }) => {
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
            if (winner) {
                updateScore(winner);
            }
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
        onGameEnd();
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        onGameEnd();
    }


    return (
        <div className="game-page">
            <h2>{statusMessage}</h2>
            <Board squares={squares} onSquareClick={handleClick} />
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>

                <h3>Game Over!</h3>
                <p>{statusMessage}</p>
                <button onClick={handleNextTour} style={{ margin: '10px' }}>
                    Start Next Tour (Score: {settings.scoreX} - {settings.scoreO})
                </button>
                <button onClick={handleNewGame} style={{ margin: '10px' }}>
                    Configure New Game
                </button>

            </Modal>
        </div>
    );
};

export default GamePage;