import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import moviesReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    login: loginReducer,
    movies: moviesReducer,
  },
});

export default appStore;
