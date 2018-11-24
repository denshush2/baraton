import actionTypes from "./actionsTypes";

export default {
  addToCart(product) {
    return {
      type: actionTypes.CART_ADD_TO_CART,
      payload: product
    };
  },
  deleteOneFromCart(id) {
    return {
      type: actionTypes.CART_DELETE_ONE_FROM_CART,
      payload: id
    };
  },
  updateStore(store) {
    return {
      type: actionTypes.CART_UPDATE_FROMLOCAL_CART,
      payload: store
    };
  },
  addOneToCart(id) {
    return {
      type: actionTypes.CART_ADD_ONE_TO_CART,
      payload: id
    };
  },
  removeProductFromCart(id) {
    return {
      type: actionTypes.CART_DELETE_FROM_CART,
      payload: id
    };
  }
};
