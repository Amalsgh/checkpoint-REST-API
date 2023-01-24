// import createStore
import { applyMiddleware, compose, createStore } from "redux";

// import rootReducers
import rootReducer from "../Reducers";
import thunk from 'redux-thunk';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

// store
const store = createStore (rootReducer , composeEnhancer(applyMiddleware(thunk)));

// export 
export default store;