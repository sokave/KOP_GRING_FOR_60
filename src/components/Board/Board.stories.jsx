import Board from "./Board";

export default {
    title: "Components/Board",
    component: Board,
    argTypes: {
        onSquareClick: { action: "square clicked" },
    },
};

export const EmptyBoard = {
    args: {
        squares: ["", "", "", "", "", "", "", "", ""],
    },
};

export const MidGameBoard = {
    args: {
        squares: ["X", "O", "X", "", "O", "", "", "", "X"],
    },
};

export const WinningBoard = {
    args: {
        squares: ["X", "X", "X", "O", "O", "", "", "", ""],
    },
};