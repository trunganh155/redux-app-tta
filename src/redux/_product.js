import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 0,
      name: "iPhone 13 Pro Max",
      price: 1499,
      img: "https://cdn.didongviet.vn/pub/media/catalog/product//i/p/iphone-13-pro-1tb-vang-didongviet_1_1.jpg",
    },
    {
      id: 1,
      name: "iPhone 13 Pro",
      price: 1399,
      img: "https://cdn.didongviet.vn/pub/media/catalog/product//i/p/iphone-13-pro-128gb-da-active-didongviet_1.jpg",
    },
    {
      id: 2,
      name: "iPhone 13",
      price: 1299,
      img: "https://cdn.didongviet.vn/pub/media/catalog/product//i/p/iphone-13-128gb-da-active-didongviet.jpg",
    },
    {
      id: 3,
      name: "iPhone 13 Mini",
      price: 1159,
      img: "https://cdn.didongviet.vn/pub/media/catalog/product//i/p/iphone-13-256gb-xanh-duong-didongviet_1.jpg",
    },
    {
      id: 4,
      name: "iPhone 12 Pro Max",
      price: 1099,
      img: "https://cdn.didongviet.vn/pub/media/catalog/product//i/p/iphone-12-pro-xanh-didongviet_1_1_2_1.jpg",
    },
    {
      id: 5,
      name: "iPhone 12",
      price: 999,
      img: "https://cdn.didongviet.vn/pub/media/catalog/product//i/p/iphone-12-mau-green-didongviet_2.jpg",
    },
    {
      id: 6,
      name: "iPhone 11 Pro Max",
      price: 899,
      img: "https://cdn.didongviet.vn/pub/media/catalog/product//i/p/iphone-11-pro-max-vang-didongviet_7.jpg",
    },
    {
      id: 7,
      name: "iPhone 11 Pro",
      price: 799,
      img: "https://cdn.didongviet.vn/pub/media/catalog/product//i/p/iphone-11-pro-xanh-didongviet.jpg",
    },
    {
      id: 8,
      name: "iPhone 11",
      price: 699,
      img: "https://cdn.didongviet.vn/pub/media/catalog/product//i/p/iphone-11-128gb-den-didongviet_1.jpg",
    },
    {
      id: 9,
      name: "iPhone XS Max",
      price: 599,
      img: "https://cdn.didongviet.vn/pub/media/catalog/product//i/p/iphone-xs-max-512gb-mau-gold-didongviet.jpg",
    },
    {
      id: 10,
      name: "iPhone X",
      price: 499,
      img: "https://cdn.didongviet.vn/pub/media/catalog/product//i/p/iphone-x-256gb-mau-xam-didongviet.jpg",
    },
    {
      id: 11,
      name: "iPhone SE 2020",
      price: 399,
      img: "https://cdn.didongviet.vn/pub/media/catalog/product//i/p/iphone-se-2020-red-600x600_1.jpg",
    },

    {
      id: 12,
      name: "iPhone 8 Plus",
      price: 299,
      img: "https://cdn.didongviet.vn/pub/media/catalog/product//a/p/apple-iphone-8-plus-256gb-silver-didongviet.jpg",
    },
  ],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = productSlice.actions;

export default productSlice.reducer;
