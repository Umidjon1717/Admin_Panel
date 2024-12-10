import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: localStorage.getItem("token") || null, 
  },
  reducers: {
    signIn(state, action) {
      state.value = action.payload;
      localStorage.setItem("token", state.value); 
    },
    signOut(state) {
      state.value = null;
      localStorage.removeItem("token"); 
    },
  },
});

export const { signIn, signOut } = tokenSlice.actions;
export default tokenSlice.reducer;
