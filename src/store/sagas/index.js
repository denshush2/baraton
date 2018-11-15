import createSagaMiddleware from "redux-saga";
import appSaga from "./app";

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;
