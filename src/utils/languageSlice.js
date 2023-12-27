import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: { lang: "en" },
  reducers: {
    selectLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { selectLanguage } = languageSlice.actions;

export default languageSlice.reducer;
