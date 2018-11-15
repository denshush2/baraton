import types from "./actionsTypes";
import initialState from "./state";

export default (state = initialState, action) => {
  switch (action.type) {
    case types.APP_LOADING:
      return Object.assign({}, state, {
        ...state,
        loading: true
      });
    default:
      return state;
  }
};
