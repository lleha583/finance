import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import dataSlice from "./transitionSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        userData: dataSlice,
      }
  })