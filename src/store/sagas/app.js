import { takeEvery } from "redux-saga";
// import { fork, call, put } from "redux-saga/effects";
import types from "../actionsTypes";
// import actions from "../actions";

function getAppLoading() {
  console.log("Hello from saga");
}

// function* callAppLoading() {}

export default function* mySaga() {
  yield takeEvery(types.APP_LOADING, getAppLoading);
}
