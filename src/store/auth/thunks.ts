import { checkingCredentials, login, logout } from "./authSlice";
import {
  logoutFirebase,
  singInWithGoogle,
  registerUserWithEmailPassword
} from "../../firebase/providers";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "../../firebase/config";

interface PropsAuthFirebase {
  email: string;
  password: string;
}

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
    console.log({result});
  };
};
