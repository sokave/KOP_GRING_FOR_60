import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Board from '../../components/Board/Board';
import Modal from '../../components/Modal/Modal';
import { useTicTac } from '../../hook/useTicTac';
import { addGameResult } from '../../store/gameSlice';

const GamePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { playerXName, playerOName } = useSelector((state) => state.game);

    const { squares, winner, isDraw, handleClick, status, resetGame } = useTicTac();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const currentPlayerName = status.includes('Next player: X') ? playerXName : playerOName;
    const statusMessage = winner
        ? `Winner: ${winner === 'X' ? playerXName : playerOName}`
        : isDraw
            ? "It is a Draw!"
            : `Next player: ${currentPlayerName}`;

    useEffect(() => {
        if (winner || isDraw) {
            const resultData = {
                id: id,
                winner: winner ? (winner === 'X' ? playerXName : playerOName) : 'Draw',
                date: new Date().toLocaleString()
            };
            dispatch(addGameResult(resultData));

            setIsModalOpen(true);
        }
    }, [winner, isDraw, id, playerXName, playerOName, dispatch]);

    const handleNewGame = () => {
        setIsModalOpen(false);
        resetGame();
        navigate('/');
    };

    const handleToScoreboard = () => {
        navigate('/scoreboard');
    };

    return (
        <div className="game-page">
            <p>Session: {id}</p>
            <h2>{statusMessage}</h2>
            <Board squares={squares} onSquareClick={handleClick} />

            <Modal isOpen={isModalOpen} onClose={handleNewGame}>
                <h3>Game Over!</h3>
                <p>{statusMessage}</p>
                <button onClick={handleNewGame}>Back to Settings</button>
                <button onClick={handleToScoreboard}>View Scoreboard</button>
            </Modal>
        </div>
    );
};

export default GamePage;