// src/redux/selectedProductSlice.js
import { createSlice } from '@reduxjs/toolkit';

const allproductslice = createSlice({
  name:"category",
  initialState: null,
  reducers: {
    selectCategory: (state, action) => action.payload,
}
});

export const { selectCategory } = allproductslice.actions;
export default allproductslice.reducer;
