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
                ...action.data
            }
        default:
            return state;
    }
}

export const setUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, data: { userId, login, email, isAuth } });

export const getAuthUserData = () => {
    return (dispatch) => {
        return authAPI.getAuthUserData()
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    const { id, login, email } = responce.data.data;
                    dispatch(setUserData(id, login, email, true))
                }
        })
    }
}
export const login = (email, password, rememberMe, setStatus) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    setStatus(responce.data.messages)
                }
        })
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
        })
    }
}

export default authReducer;