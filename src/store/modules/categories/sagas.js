import { takeEvery, call, put } from "redux-saga/effects";
import types from "./actionsTypes";
import actions from "./actions";
import AppActions from "../../actions";
import ProductsActions from "../products/actions";
import Api from "../../../api";
import CategoriesFilter from "../../utils/filterCategories";

function* getCategories() {
  try {
    yield put(AppActions.loading());
    const data = yield call(Api.getAllCategories);
    yield put(actions.loadCategoriesSuccess(data.data));
    // yield CategoriesFilter.buildIdsArrayFromCategories(data.data)
    yield put(
      ProductsActions.setCategoriesList(
        yield CategoriesFilter.buildIdsArrayFromCategories(data.data)
      )
    );
    yield put(AppActions.loadingOff());
  } catch (e) {
    yield put(actions.loadCategoriesError(e));
  }
}

// function* callAppLoading() {}

export default function*() {
  yield takeEvery(types.CATEGORIES_LOADING, getCategories);
}
