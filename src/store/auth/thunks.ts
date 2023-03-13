import { checkingCredentials, login, logout } from "./authSlice";
import {
  logoutFirebase,
  singInWithGoogle,
  registerUserWithEmailPassword,
  loginWithEmailPassword,
} from "../../firebase/providers";
import { forgotPassword } from "../../firebase/providers";

//----CheckingAuthentication----//
export const checkingAuthentication = (email: string, password: string) => {
  return async (dispach: any) => {
    dispach(checkingCredentials());
  };
};

//----StartGoogleSignIn----//
export const startGoogleSignIn = () => {
  return async (dispatch: any): Promise<void> => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout());
    delete result.ok;
    dispatch(login(result));
  };
};

//----StartLogout----//
export const startLogout = () => {
  return async (dispatch: any) => {
    await logoutFirebase();
    dispatch(logout());
  };
};

//----StartCreatingUserWithEmailPassword----//
export const startCreatingUserWithEmailPassword = (
  email: string,
  password: string,
  displayName: string
) => {
  return async (dispach: any) => {
    dispach(checkingCredentials());
    const result = await registerUserWithEmailPassword(
      email,
      password,
      displayName
    );
    console.log({ result });
  };
};

//----StartLoginWithEmailPassword----//
export const startLoginWithEmailPassword = (
  email: string,
  password: string
) => {
  return async (dispach: any) => {
    dispach(checkingCredentials());
    const result = await loginWithEmailPassword(email, password);
    console.log({ result });
  };
};

//----StartForgotPassword----//
export const startForgotPassword = (email: string) => {
  return async (dispach: any) => {
    const result = await forgotPassword(email);
    console.log({ result });
  };
};
