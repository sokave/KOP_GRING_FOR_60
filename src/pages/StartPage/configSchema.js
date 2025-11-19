import * as yup from 'yup';

export const configSchema = yup.object().shape({
    playerXName: yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 character'),
    playerOName: yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 character')
        .notOneOf([yup.ref('playerXName')], 'Player O name must be different from Player X'),
});