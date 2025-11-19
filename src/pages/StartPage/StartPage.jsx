import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useGame } from '../../context/GameContext';
import { configSchema } from './configSchema';

const formStyles = {
    input: {
        padding: '8px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '200px',
    },
    error: {
        color: 'red',
        fontSize: '0.9rem',
        marginTop: '-5px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px'
    }
};


const StartPage = ({ onStartGame }) => {
    const { settings, updateSettings, resetScore } = useGame();

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
        onStartGame();
    };

    return (
        <div>
            <h1>Tic-Tac-Toe</h1>
            <h3>Score: {settings.playerXName} ({settings.scoreX}) vs {settings.playerOName} ({settings.scoreO})</h3>
            <p>Enter player names to start the game:</p>

            <form onSubmit={handleSubmit(onSubmit)} style={formStyles.form}>

                {/* Player X */}
                <input
                    {...register('playerXName')}
                    style={formStyles.input}
                    placeholder="Name for Player X"
                />
                {errors.playerXName && <p style={formStyles.error}>{errors.playerXName.message}</p>}

                {/* Player O */}
                <input
                    {...register('playerOName')}
                    style={formStyles.input}
                    placeholder="Name for Player O"
                />
                {errors.playerOName && <p style={formStyles.error}>{errors.playerOName.message}</p>}

                {/* Кнопка деактивована якщо форма не валідна */}
                <button type="submit" disabled={!isValid}>
                    Start Game
                </button>
            </form>

            <button onClick={resetScore} style={{ marginTop: '20px' }}>Reset Score</button>
        </div>
    );
};

export default StartPage;