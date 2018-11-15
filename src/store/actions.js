import actionsTypes from "./actionsTypes";
export default {
  loading(state) {
    return {
      type: actionsTypes.APP_LOADING,
      state
    };
  }
};
