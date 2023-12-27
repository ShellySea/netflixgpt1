import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import languageReducer from "./languageSlice";

const appStore = configureStore({
  reducer: {
    login: loginReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    language: languageReducer,
  },
});

export default appStore;
