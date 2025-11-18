import React from 'react';
import Square from '../Square/Square';
import './Board.css';

const Board = () => {
    return (
        <div className="board">
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    );
};

export default Board;