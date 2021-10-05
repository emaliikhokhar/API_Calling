import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/rootReducer";
import thunk from "redux-thunk";
import { suspenseMiddleware } from "suspense-redux";

const store = createStore(rootReducer, applyMiddleware(thunk, suspenseMiddleware));

export default store