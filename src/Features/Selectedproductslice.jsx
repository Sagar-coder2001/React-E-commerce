// src/redux/selectedProductSlice.js
import { createSlice } from '@reduxjs/toolkit';

const selectedProductSlice = createSlice({
  name: 'selectedProduct',

  initialState: null,

  reducers: {
    
    selectProduct: (state, action) => action.payload,
    clearProduct: () => null,
  },
});

export const { selectProduct, clearProduct } = selectedProductSlice.actions;
export default selectedProductSlice.reducer;
