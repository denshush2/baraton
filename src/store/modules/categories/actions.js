import actionsTypes from "./actionsTypes";

export default {
  loadCategories() {
    return {
      type: actionsTypes.CATEGORIES_LOADING
    };
  },
  loadCategoriesError(error) {
    return {
      type: actionsTypes.CATEGORIES_RECIVED_ERROR,
      payload: error
    };
  },
  loadCategoriesSuccess(data) {
    return {
      type: actionsTypes.CATEGORIES_RECIVED,
      payload: data
    };
  },
  getAllCategories() {
    return {
      type: actionsTypes.CATEGORIES_GET
    };
  }
};
