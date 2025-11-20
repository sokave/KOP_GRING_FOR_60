import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { useGame } from '../../context/GameContext';
import { configSchema } from './configSchema';

const StartPage = () => {
    const { settings, updateSettings, resetScore } = useGame();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({
        resolver: yupResolver(configSchema),
        defaultValues: {
            playerXName: settings.playerXName,
            playerOName: settings.playerOName,
        },
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        updateSettings(data);
        if (isDirty) {
            resetScore();
        }

        const gameId = Date.now().toString();

        navigate(`/game/${gameId}`);
    };

    return (
        <div>
            <h1>Tic-Tac-Toe</h1>
            <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <input {...register('playerXName')} placeholder="Player X Name" />
                <p style={{color: 'red'}}>{errors.playerXName?.message}</p>

                <input {...register('playerOName')} placeholder="Player O Name" />
                <p style={{color: 'red'}}>{errors.playerOName?.message}</p>

                <button type="submit" disabled={!isValid}>Start Game</button>
            </form>
        </div>
    );
};

export default StartPage;