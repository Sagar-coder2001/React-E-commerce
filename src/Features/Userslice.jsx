import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') ? true : false,
};

export const Userslice = createSlice({
  name: "loggedin",
  initialState, // Corrected spelling
  reducers: {
    userlogin: (state , action) => {
      state.isLoggedIn = true; // Consistent casing
    },
    logout: (state) => {
      state.isLoggedIn = false; // Consistent casing
    },
  },
});

export const { userlogin, logout } = Userslice.actions;
export default Userslice.reducer;
