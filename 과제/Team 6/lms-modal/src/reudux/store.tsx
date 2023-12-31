import { configureStore } from "@reduxjs/toolkit";
import titleReducer from "./titleSlice";
import contentReducer from "./contentSlice";

export const store = configureStore({
  reducer: {
    title: titleReducer,
    content: contentReducer,
  },
});
