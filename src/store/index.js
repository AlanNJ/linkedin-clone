import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/userReducer";
import userReducer from "../reducers/userReducer";

//const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
