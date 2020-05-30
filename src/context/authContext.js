import chatApi from '../api/chatApi';
import createDataContext from './createDataContext';
import { SIGN_IN, LOG_OUT } from '../constants/actionTypes';

const initialState = {
    token: null,
    error: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, token: action.payload, error: '' };
        case LOG_OUT:
            return { token: null, error: '' };
        default:
            return state;
    }
};

const signin = (dispatch) => {
    return async ({ username, password }) => {
        try {
            const response = await chatApi.post('/signin', { username, password });
            console.log(123, response.data.data);
            localStorage.setItem('token', response.data.data.token);

            dispatch({ type: SIGN_IN, payload: response.data.data })
        } catch (error) {
            alert(error);
        }
    };
};

const signup = (dispatch) => {
    return async ({ username, password }) => {
        try {
            const response = await chatApi.post('/signup', { username, password });
            localStorage.setItem('token', response.data.token);

            dispatch({ type: SIGN_IN, payload: response.data })
        } catch (error) {
            alert(error);
        }
    };
};

export const { Context, Provider } = createDataContext(
    authReducer,
    { signin, signup },
    initialState
);