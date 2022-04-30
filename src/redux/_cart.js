import { createSlice } from "@reduxjs/toolkit";

const initialState = { carts: [] };

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;

      state.carts.push(newProduct);
    },
    removeToCart: (state, action) => {
      const id = action.payload;

      state.carts.splice(
        state.carts.findIndex((product) => product.id === id),
        1
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
