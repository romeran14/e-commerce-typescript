import { async } from '@firebase/util';
import { checkingCredentials } from './authSlice';
import { AnyAction } from 'redux';


//CheckingAuthentication

export const checkingAuthentication = (email: string , password: string) =>{
  return async (dispach:any) =>{
    dispach(checkingCredentials());
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch:any) =>{
    dispatch(checkingCredentials());
  }
}