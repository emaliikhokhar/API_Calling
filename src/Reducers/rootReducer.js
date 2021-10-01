import postReducer from "./postReducer";
import commentReducer from "./commentReducer";
import albumReducer from "./albumReducer";
import todosReducer from "./todosReducer";
import photosReducer from "./photosReducer";
import usersReducer from "./usersReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({postReducer, commentReducer, albumReducer, todosReducer, usersReducer, photosReducer})

export default rootReducer