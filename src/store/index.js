import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import sagas from "./sagas";
// import AppSaga from "./sagas/app";
import CategoriesSaga from "./modules/categories/sagas";
import ProductsSaga from "./modules/products/sagas";

import AppReducer from "./reducers";
import CategoriesReducer from "./modules/categories";
import ProductsReducer from "./modules/products";
import CartReducer from "./modules/cart";
import "semantic-ui-css/semantic.min.css";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
  AppReducer,
  CategoriesReducer,
  ProductsReducer,
  CartReducer
});

export default createStore(reducers, composeEnhancer(applyMiddleware(sagas)));
//Run Sagas
// sagas.run(AppSaga);
sagas.run(CategoriesSaga);
sagas.run(ProductsSaga);
