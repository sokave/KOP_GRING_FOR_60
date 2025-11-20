import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 100px;
  width: 100px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s;

  color: ${props => props.$value === 'X' ? '#ff6b6b' : '#4ecdc4'};
  
  &:hover {
    background: #f0f8ff;
  }

  &:focus {
    outline: none;
  }
`;

const Square = ({ value, onClick }) => {
    return (
        <StyledButton onClick={onClick} $value={value}>
            {value}
        </StyledButton>
    );
};

export default Square;