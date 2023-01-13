import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import uiSlice from "./ui/uiSlice";
import cartSlice from "./cart/cartSlice"
import productSlice from "./produts/productSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
    cart: cartSlice,
    product: productSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
