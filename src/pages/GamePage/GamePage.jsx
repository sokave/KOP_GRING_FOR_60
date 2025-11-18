import React from 'react';
import Board from '../../components/Board/Board';

const GamePage = ({ onGameEnd }) => {
    return (
        <div>
            <h2>Current Player: X</h2>
            <Board /> {/* sfdgdsfd */}

            {/*кнопкa імітує завершення гри */}
            <button onClick={onGameEnd}>Simulate Game End</button>
        </div>
    );
};

export default GamePage;