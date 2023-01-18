import { FirebaseAuth } from "./config";
import { AuthState } from "../store/auth/interface";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

//-----Google Provider-----///
const googleProvider = new GoogleAuthProvider();

//---- Objeto Firebase ----//
const ObjFirebase: AuthState = {
  ok: false,
};
//----Sing in with Google----//
export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    //----Error----//
    console.error(error);
    const errorCode = error;
    return ObjFirebase;
  }
};

//----Logout Firebase----//
export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};

//----Register Firebase ----//
export const registerUserWithEmailPassword = async (
  email: string,
  password: string,
  displayName: string
) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    const currentUser = FirebaseAuth.currentUser!;
    await updateProfile(currentUser, { displayName });
    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
    };
  }
};

//----loginWithEmailPassword----//

export const loginWithEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    console.log({ resp });
  } catch (error) {
    console.error(error);
  }
};

//----ForgotPassword----//
export const forgotPassword = async (email: string) => {
  try {
    const resp = await sendPasswordResetEmail(FirebaseAuth, email);
    return {
      ok: true,
      email,
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
    };
  }
};
