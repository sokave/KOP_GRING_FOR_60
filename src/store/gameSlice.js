import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    playerXName: 'Player X',
    playerOName: 'Player O',
    gameHistory: [],
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setPlayerNames: (state, action) => {
            state.playerXName = action.payload.playerXName;
            state.playerOName = action.payload.playerOName;
        },
        addGameResult: (state, action) => {
            state.gameHistory.push(action.payload);
        },
        clearHistory: (state) => {
            state.gameHistory = [];
        }
    },
});

export const { setPlayerNames, addGameResult, clearHistory } = gameSlice.actions;
export default gameSlice.reducer;