import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import uiSlice from "./ui/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
