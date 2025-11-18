import React from 'react';

const ResultsPage = ({ onPlayAgain }) => {
    return (
        <div>
            <h2>Game Over!</h2>
            <p>Player X Wins!</p> {/*  плейсхолдер */}
            <button onClick={onPlayAgain}>Play Again</button>
        </div>
    );
};

export default ResultsPage;