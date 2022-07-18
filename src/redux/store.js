import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer";
import {notesReducer} from "./notesReducer"


const store = createStore(combineReducers(
    {
        auth:authReducer,
        notes:notesReducer,
    }
),applyMiddleware(thunk));

export default store;