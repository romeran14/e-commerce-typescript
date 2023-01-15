import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../store/store';
import { FirabaseAuth } from '../firebase/config';

export const useChecking = () => {
  const  { STATUS }  =  useSelector((state: RootState) => state.auth);
  const dispach = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(FirabaseAuth , async (user) =>{
    })
  },[])
}


