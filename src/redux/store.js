import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer, initialAuth } from "./authReducer";


const store = createStore(combineReducers(
    {
        auth:authReducer,
    }
),{
    auth:initialAuth
},applyMiddleware(thunk));

export default store;