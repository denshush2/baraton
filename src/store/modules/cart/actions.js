import actionTypes from "./actionsTypes";

export default {
  addToCart(product) {
    return {
      type: actionTypes.CART_ADD_TO_CART,
      payload: product
    };
  },
  deleteFromCart(product) {
    return {
      type: actionTypes.CART_DELETE_FROM_CART,
      payload: product
    };
  }
};
