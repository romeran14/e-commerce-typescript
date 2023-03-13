import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./interface";

const initialState: UiState = {
  mobileOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    handleDrawerToggle: (state) => {
      state.mobileOpen = !state.mobileOpen;
    },
  },
});

export const { handleDrawerToggle } = uiSlice.actions;
export default uiSlice.reducer;
