import { configureStore } from "@reduxjs/toolkit";
import userSlice, { fetchUser } from "./userSlice";

export const store = configureStore({
    reducer: userSlice
  })