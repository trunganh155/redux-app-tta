import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./_product";
import cartReducer from "./_cart";

export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
  },
});
