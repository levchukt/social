import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import authReducer from "./auth_reducer";
import dialogsReducer from "./dialogs_reducer";
import navbarReducer from "./navbar_reducer";
import profileReducer from "./profile_reducer";
import usersReducer from "./users_reducer";
import ThunkMiddleware from "redux-thunk";
import appReducer from "./app_reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(
    applyMiddleware(ThunkMiddleware)
  ));

// let store = createStore(reducers, applyMiddleware(ThunkMiddleware));


export default store;