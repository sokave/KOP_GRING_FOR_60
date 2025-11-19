import { useState } from 'react';

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export const useTicTac = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const winner = calculateWinner(squares);

    const handleClick = (index) => {
        if (winner || squares[index]) return;

        const newSquares = [...squares];
        newSquares[index] = isXNext ? 'X' : 'O';

        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
    };

    const isDraw = !winner && squares.every(square => square !== null);

    const status = winner
        ? `Winner: ${winner}`
        : isDraw
            ? "Draw!"
            : `Next player: ${isXNext ? 'X' : 'O'}`;

    return {
        squares,
        isXNext,
        winner,
        isDraw,
        status,
        handleClick,
        resetGame
    };
};