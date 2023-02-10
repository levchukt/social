import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs_reducer";
import navbarReducer from "./navbar_reducer";
import profileReducer from "./profile_reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer
})

let store = createStore(reducers);


export default store;