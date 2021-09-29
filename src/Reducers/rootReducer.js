import postReducer from "./postReducer";
import commentReducer from "./commentReducer";
import albumReducer from "./albumReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({postReducer, commentReducer, albumReducer})

export default rootReducer