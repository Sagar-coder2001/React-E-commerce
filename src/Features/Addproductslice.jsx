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
    addtocartproduct: (state) => {
      const storedItem = JSON.parse(localStorage.getItem('cartitem')) || [];
      
      storedItem.forEach((newItem) => {
        const existingItem = state.cartItems.find(item => item.id === newItem.id);
        
        if (!existingItem) {
          // If the item does not exist, add it to the cart
          state.cartItems.push({
            id: newItem.id,
            productName: newItem.title,
            image: newItem.images,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
          });
          state.totalQuantity++;
        } else {
          // If the item already exists, update its quantity and total price
          existingItem.quantity++;
          existingItem.totalPrice += Number(newItem.price);
          // state.totalQuantity++; // Increment totalQuantity
        }
      });

      // Update total amount after changes
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * item.quantity, 0
      ).toFixed(2);
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      
      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity -= existingItem.quantity; // Deduct the item's quantity
      }

      // Update total amount after deletion
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * item.quantity, 0
      ).toFixed(2);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.cartItems.find(item => item.id === id);
      
      if (product) {
        // Adjust totalQuantity based on the difference
        const quantityChange = quantity - product.quantity;
        product.quantity = quantity;
        state.totalQuantity += quantityChange; // Update totalQuantity accordingly
      }

      // Update total amount after quantity change
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * item.quantity, 0
      ).toFixed(2);
    },
  },
});

export const { addtocartproduct, deleteItem, updateQuantity } = addproductslice.actions;
export default addproductslice.reducer;
