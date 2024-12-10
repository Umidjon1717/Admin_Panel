import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    firstname: "",
    lastname: "",
    age: "",
    profession: "",
    gender: "",
  },
  reducers: {
    AddForm(state, action) {
      const updatedState = { ...state, ...action.payload };
      localStorage.setItem("form", JSON.stringify(updatedState)); 
      return updatedState;
    },
  },
});

const savedFormData = JSON.parse(localStorage.getItem("form"));
if (savedFormData) {
  formSlice.getInitialState = savedFormData;
}

export const { AddForm } = formSlice.actions;
export default formSlice.reducer;
