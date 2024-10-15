import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 'hello',
};

export const Dummyslice = createSlice({
  name: "simple",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload; // Updates the value
    },
  },
});

// Export the action for use in components
export const { setValue } = Dummyslice.actions;

export default Dummyslice.reducer;
