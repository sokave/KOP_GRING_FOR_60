import React from 'react';

const ResultsPage = ({ onPlayAgain, result }) => {
    return (
        <div>
            <h2>Game Over!</h2>
            <h3>{result === 'Draw' ? 'It is a Draw!' : `Winner: Player ${result}`}</h3>
            <button onClick={onPlayAgain}>Play Again</button>
        </div>
    );
};

export default ResultsPage;