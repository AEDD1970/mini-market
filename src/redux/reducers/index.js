import { combineReducers } from "redux";
import productReducer from "./ShoppingProduct";

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;