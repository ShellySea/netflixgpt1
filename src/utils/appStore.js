import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";

const appStore = configureStore({
  reducer: {
    login: loginReducer,
  },
});

console.log(appStore);

export default appStore;
