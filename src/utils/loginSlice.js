import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = loginSlice.actions;

export default loginSlice.reducer;
