import { createSlice } from "@reduxjs/toolkit";

const initialState = { carts: [] };

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const cartItem = {
        product: newProduct,
        quantity: 1,
      };

      const index = state.carts.findIndex(
        (cart) => cart.product.id === newProduct.id
      );
      if (index === -1) {
        state.carts.push(cartItem);
      } else {
        state.carts[index].quantity = state.carts[index].quantity + 1;
      }
    },

    increaseQuantity: (state, action) => {
      const productId = action.payload;                 //lay du lieu tu action.payload
      const index = state.carts.findIndex(              //tim vi tri cua san pham duoc click o trang cart trong mang carts
        (cart) => cart.product.id === productId
      );

      state.carts[index].quantity = state.carts[index].quantity + 1;    //tang so luong len 1
    },

    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const index = state.carts.findIndex(
        (cart) => cart.product.id === productId
      );

      if (state.carts[index].quantity > 1) {
        state.carts[index].quantity = state.carts[index].quantity - 1;
      }
    },
    
    removeToCart: (state, action) => {
      const productId = action.payload;

      state.carts.splice(
        state.carts.findIndex((cart) => cart.product.id === productId),
        1
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
