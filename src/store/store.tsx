import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import uiSlice from "./ui/uiSlice";
import cartSlice from "./cart/cartSlice"
import productSlice from "./produts/productSlice";
import { baseApi } from "./services/api";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSlice,
    ui: uiSlice,
    cart: cartSlice,
    product: productSlice,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }).concat(baseApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
