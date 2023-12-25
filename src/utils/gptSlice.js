import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGPT: false,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPT = !state.showGPT;
    },
  },
});

export const { toggleGPTSearchView } = gptSlice.actions;

export default gptSlice.reducer;
