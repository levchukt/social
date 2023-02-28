
import { getAuthUserData } from "./auth_reducer";

const SUCCESS_INITIALIZING = 'SUCCESS_INITIALIZING';

const initialState = {
    initialized: false,
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_INITIALIZING:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}


// action creator
export const successInitialization = () => ({ type: SUCCESS_INITIALIZING })


// thunk creator
export const initializeApp = () => {
    return (dispatch) => {
        const promise = dispatch(getAuthUserData())
        promise.then(() => { dispatch(successInitialization()) });
    }
}



export default appReducer;