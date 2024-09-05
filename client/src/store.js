import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { orderReducer } from "./reducers/orderReducer.js";

//import reducers

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  orderDataReducer: orderReducer,
});

// Create Redux store
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
