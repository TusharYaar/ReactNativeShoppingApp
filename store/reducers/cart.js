import CartItem from "../../models/cartItem";
import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      let cartItem;
      if (state.items[payload.id]) {
        cartItem = new CartItem(
          state.items[payload.id].quantity + 1,
          state.items[payload.id].productPrice,
          payload.title,
          state.items[payload.id].sum + payload.price
        );
      } else {
        cartItem = new CartItem(1, payload.price, payload.title, payload.price);
      }
      return { ...state, items: { ...state.items, [payload.id]: cartItem }, totalAmount: state.totalAmount + payload.price };

    default:
      return state;
  }
};
