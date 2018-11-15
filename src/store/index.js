import { createStore, compose, applyMiddleware } from "redux";
import sagas from "./sagas";
import appSaga from "./sagas/app";
import appReducer from "./reducers";
import "semantic-ui-css/semantic.min.css";
import "../semantic/dist/semantic.min.css";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(appReducer, composeEnhancer(applyMiddleware(sagas)));
sagas.run(appSaga);
