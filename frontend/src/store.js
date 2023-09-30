import { configerStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";

const store = configerStore({
  reducer: {
    posts: postReducer,
  },
});
export default store;
