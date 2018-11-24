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
    case types.CART_DELETE_FROM_CART:
      let productPosition = state.cart.map((product, index) => {
        if (product.id === action.payload) {
          return index;
        }
        return null;
      });
      state.cart.splice(productPosition[0], 1);
      return state;

    case types.CART_ADD_ONE_TO_CART:
      product = state.cart.find(product => product.id === action.payload);
      product.quantity = product.quantity + 1;
      return state;
    case types.CART_DELETE_ONE_FROM_CART:
      product = state.cart.find(product => product.id === action.payload);
      if (product.quantity === 1) {
        return state;
      } else {
        product.quantity = product.quantity - 1;
        return state;
      }
    case types.CART_UPDATE_FROMLOCAL_CART:
      return Object.assign({}, state, {
        ...state,
        cart: action.payload
      });

    default:
      return state;
  }
};
