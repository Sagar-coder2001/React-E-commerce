// src/redux/selectedProductSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const addproductslice = createSlice({
  name: 'addproduct',
  initialState,
  
  reducers: {
    addtocartproduct: (state , action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.title,
          image: newItem.images,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
        Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity), 0
      );
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) =>  (total + Number(item.price) * Number(item.quantity)).toFixed(2), 0.00
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.cartItems.find(item => item.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },

    },
});

export const { addtocartproduct , deleteItem , updateQuantity} = addproductslice.actions;
export default addproductslice.reducer;
