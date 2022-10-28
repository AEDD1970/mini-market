import { ADD_PRODUCT, PAY_PRODUCTS, PAY_PRODUCTS_ERROR, PAY_PRODUCTS_SUCESS } from "../constants/ShoppingProduct.js";
import { initialState } from "../states/ShoppingProduct";

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const isNew = !state.listShoppingCart.find(
        (item) => item._id === action.payload._id
      );
      return {
        ...state,
        listShoppingCart: isNew
          ? [...state.listShoppingCart, { ...action.payload, quantity: 1, priceTotal: action.payload.priceTotal }]
          : state.listShoppingCart.map((item) => {
            const quantity = item._id === action.payload._id
            ? item.quantity + 1
            : item.quantity
            return {
              ...item,
              quantity,
              priceTotal: item.price * quantity
            }
            }),
      };
    }
    case PAY_PRODUCTS: {
      return {
          ...state,
          loading: true,
          error: null,
      };
  }
  case PAY_PRODUCTS_SUCESS: {
      return {
          ...state,
          loading: false,
          error: null,
          message: "¡SUCCESSFUL PAYMENT!",
       
      };
  }
  case PAY_PRODUCTS_ERROR: {
      return {
          ...state,
          loading: false,
          error: true,
          message: "LONG PITCH UPS",
      };
  }

    default: {
      return state;
    }
  }
}
