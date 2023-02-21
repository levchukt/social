import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserData = (userId, login, email) => ({ type: SET_USER_DATA, data: { userId, login, email } });

export const login = () => {
    return (dispatch) => {
        authAPI.login()
            .then(responce => {
            const { id, login, email } = responce.data.data;
            dispatch(setUserData(id, login, email))
        })
    }
}

export default authReducer;