import types from "./actionTypes";
import initialState from "./state";
import filterProducts from "../../utils/filterProducts";

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS_RECIVIED:
      return Object.assign({}, state, {
        ...state,
        products: action.payload
      });
    case types.PRODUCTS_FILTER_START:
      console.log("id", state.activeSection);
      const productsFiltred = filterProducts.filterProductsBySection(
        state.products,
        {
          id: state.activeSection,
          filters: {
            ...action.payload,
            isSublevel: state.isSublevel
          },
          categories: state.categoriesId
        }
      );
      return Object.assign({}, state, {
        ...state,
        filtredProducts: productsFiltred
      });
    case types.PRODUCTS_SET_CATEGORIES_LIST:
      return Object.assign({}, state, {
        ...state,
        categoriesId: action.payload
      });
    case types.SET_ACTIVE_SECTION:
      console.log("REDUCER, SET ACTIVE SECTION", state);
      return Object.assign({}, state, {
        ...state,
        activeSection: action.payload.section,
        isSublevel: action.payload.sublevel
      });
    default:
      return state;
  }
};
