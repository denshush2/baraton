import { takeEvery, call, put } from "redux-saga/effects";
import types from "./actionTypes";
import actions from "./actions";
import AppActions from "../../actions";
import Api from "../../../api";

function* getAllProducts() {
  try {
    yield put(AppActions.loading());
    const data = yield call(Api.getAllProducts);
    yield put(AppActions.loadingOff());
    yield put(actions.loadAllProductsSuccess(data.data));
    let filterData = {
      id: 0
    };
    yield put(actions.filterProductsStart(filterData));
  } catch (e) {
    yield put(actions.loadAllProductsError);
  }
}
export default function*() {
  yield takeEvery(types.PRODUCTS_LOADING_ALL, getAllProducts);
}
