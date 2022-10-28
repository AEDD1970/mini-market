import { ADD_PRODUCT, PAY_PRODUCTS } from "../constants/ShoppingProduct";

export const actionAddToCart = (data) => ({
  type: ADD_PRODUCT,
  payload: data,
});

export const payProducts = (data) => ({
  type: PAY_PRODUCTS,
  payload: data,
});