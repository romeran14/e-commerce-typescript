import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./interface";

const initialState: AuthState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<AuthState>) => {
      state.status = "authenticated";
      state.uid = payload?.uid;
      state.email = payload?.email;
      state.displayName = payload?.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
