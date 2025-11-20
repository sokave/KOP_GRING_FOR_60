import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setPlayerNames } from '../../store/gameSlice';
import { configSchema } from './configSchema';


const StartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { playerXName, playerOName } = useSelector((state) => state.game);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(configSchema),
        defaultValues: {
            playerXName,
            playerOName,
        },
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        dispatch(setPlayerNames({
            playerXName: data.playerXName,
            playerOName: data.playerOName
        }));

        const gameId = Date.now().toString();
        navigate(`/game/${gameId}`);
    };

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Tic-Tac-Toe Settings</h1>
            <p>Configure player names via Redux Toolkit</p>

            <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <input {...register('playerXName')} placeholder="Player X Name" />
                <p style={{color: 'red'}}>{errors.playerXName?.message}</p>

                <input {...register('playerOName')} placeholder="Player O Name" />
                <p style={{color: 'red'}}>{errors.playerOName?.message}</p>

                <button type="submit" disabled={!isValid}>Start Game</button>
            </form>

            <button onClick={() => navigate('/scoreboard')} style={{marginTop: '20px', backgroundColor: '#6c5ce7'}}>
                View Scoreboard
            </button>
        </div>
    );
};

export default StartPage;