import types from "./actionsTypes";
import initialState from "./state";

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CART_ADD_TO_CART:
      let product = state.cart.find(
        product => product.id === action.payload.id
      );
      if (product) {
        product.quantity = product.quantity + 1;
        return state;
      } else {
        product = action.payload;
        product.quantity = 1;
        return Object.assign({}, state, {
          ...state,
          cart: [...state.cart, product]
        });
      }

    default:
      return state;
  }
};
