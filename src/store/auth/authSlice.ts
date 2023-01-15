import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from './interface';

const initialState: AuthState = {
  STATUS: "checking",
  UID: null,
  EMAIL: null,
  DISPLAYNAME: null,
  PHOTOURL: null,
  ERRORMESSAGE: null,
  TOKEN: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    //Login State
    login: (state, { payload }: PayloadAction<AuthState>) => {
      state.STATUS= "authenticated";
      state.UID = payload?.UID;
      state.EMAIL = payload?.EMAIL;
      state.DISPLAYNAME = payload?.DISPLAYNAME;
      state.PHOTOURL = payload.PHOTOURL;
      state.ERRORMESSAGE = null;
    },
    //Logout State
    logout:(state , {payload}: PayloadAction<AuthState>) =>{
      state.STATUS = "not-authenticated";
      state.UID  = null;
      state.EMAIL = null;
      state.DISPLAYNAME = null;
      state.ERRORMESSAGE = payload?.ERRORMESSAGE;
    },
    //checkingCredentials
    checkingCredentials:(state)=>{
      state.STATUS = "checking";
    }
  },
});

export const { login , logout , checkingCredentials} = authSlice.actions;
export default authSlice.reducer;
