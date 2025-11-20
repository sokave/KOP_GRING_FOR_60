import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearHistory } from '../../store/gameSlice';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    color: white;
  }
  th {
    background-color: #61dafb;
    color: black;
  }
`;

const Container = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
`;

const ScoreboardPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const gameHistory = useSelector((state) => state.game.gameHistory);

    return (
        <Container>
            <h1>Scoreboard</h1>

            {gameHistory.length === 0 ? (
                <p>No games played yet.</p>
            ) : (
                <Table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Winner</th>
                    </tr>
                    </thead>
                    <tbody>
                    {gameHistory.map((game, index) => (
                        <tr key={index}>
                            <td>{game.date}</td>
                            <td>{game.winner}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            )}

            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button onClick={() => navigate('/')}>Back to Game</button>
                <button onClick={() => dispatch(clearHistory())} style={{backgroundColor: '#ff6b6b'}}>Clear History</button>
            </div>
        </Container>
    );
};

export default ScoreboardPage;