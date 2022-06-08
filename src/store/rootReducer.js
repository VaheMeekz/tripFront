import {combineReducers} from "redux";
import {isAuthReducer} from "./reducers/authReducer";
import {postReducer} from "./reducers/postReducer";

export const rootReducer = combineReducers({
    isAuthReducer,
    postReducer
});