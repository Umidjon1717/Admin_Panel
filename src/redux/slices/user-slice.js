import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
      value: JSON.parse(localStorage.getItem("users")) || [], 
    },
    reducers: {
      addUser(state, action) {
        state.value.push(action.payload);
        localStorage.setItem("users", JSON.stringify(state.value)); 
      },
    },
  });
  
  export const { addUser } = userSlice.actions;
  export default userSlice.reducer;
  