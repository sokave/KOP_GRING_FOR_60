import React from 'react';
import './Square.css';

const Square = ({ value, onClick }) => {
    const styleClass = value ? `square ${value.toLowerCase()}` : 'square';

    return (
        <button className={styleClass} onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;