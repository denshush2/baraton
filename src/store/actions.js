import actionsTypes from "./actionsTypes";
export default {
  loading() {
    return {
      type: actionsTypes.APP_LOADING
    };
  },
  loadingOff() {
    return {
      type: actionsTypes.APP_LOADING_OFF
    };
  }
};
