import actionTypes from "./actionTypes";

export default {
  loadAllProducts() {
    return {
      type: actionTypes.PRODUCTS_LOADING_ALL
    };
  },
  loadAllProductsError() {
    return {
      type: actionTypes.PRODUCTS_LOADING_ALL_ERROR
    };
  },
  loadAllProductsSuccess(data) {
    return {
      type: actionTypes.PRODUCTS_RECIVIED,
      payload: data
    };
  },
  loadAllProductsEnd() {
    return {
      type: actionTypes.PRODUCT_RECIVED_END
    };
  },
  filterProductsStart(data = []) {
    return {
      type: actionTypes.PRODUCTS_FILTER_START,
      payload: data
    };
  },
  setActiveSection(section, sublevel = false) {
    return {
      type: actionTypes.SET_ACTIVE_SECTION,
      payload: {
        section: section,
        sublevel: sublevel
      }
    };
  },
  setCategoriesList(categories) {
    return {
      type: actionTypes.PRODUCTS_SET_CATEGORIES_LIST,
      payload: categories
    };
  },
  setupCategories(categories) {
    return {
      type: actionTypes.PRODUCTS_SETUP_PRODUCTS,
      payload: categories
    };
  }
  // filterProducts(data) {
  //   return {
  //     type: actionTypes.PRODUCTS_FILTER_START,
  //     payload: { ...data }
  //   };
  // }
};
