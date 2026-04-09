import Square from "./Square";

export default {
    title: "Components/Square",
    component: Square,
    argTypes: {
        value: {
            control: "text",
        },
        onClick: { action: "clicked" },
    },
};

export const Empty = {
    args: {
        value: "",
    },
};

export const XValue = {
    args: {
        value: "X",
    },
};

export const OValue = {
    args: {
        value: "O",
    },
};