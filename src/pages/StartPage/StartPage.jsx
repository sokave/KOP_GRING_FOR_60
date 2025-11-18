import React from 'react';

const StartPage = ({ onStartGame }) => {
    return (
        <div>
            <h1>Tic-Tac-Toe</h1>
            <p>The classic game for two players.</p>
            {/*кнопка викличе функцію з App.jsx */}
            <button onClick={onStartGame}>Start Game</button>
        </div>
    );
};

export default StartPage;