import types from "./actionsTypes";
import initialState from "./state";
import filterCategories from "../../utils/filterCategories";

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CATEGORIES_LOADED:
      return Object.assign({}, state, {
        ...state
      });
    case types.CATEGORIES_RECIVED:
      const menu = filterCategories.filter(action.payload);
      return Object.assign({}, state, {
        ...state,
        menu: menu
      });
    case types.CATEGORIES_SET_ACTIVE_SECTION:
      console.log("setActiveSection reducer", action.payload);
      return Object.assign({}, state, {
        ...state,
        activeSection: action.payload
      });
    default:
      return state;
  }
};
