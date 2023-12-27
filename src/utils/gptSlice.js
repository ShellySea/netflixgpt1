import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGPT: false,
    searchedResults: {},
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPT = !state.showGPT;
    },
    showSearchedMovies: (state, action) => {
      state.searchedResults = action.payload;
    },
  },
});

export const { toggleGPTSearchView, showSearchedMovies } = gptSlice.actions;

export default gptSlice.reducer;
