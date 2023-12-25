import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    login: loginReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
