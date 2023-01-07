// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FirabaseConfigOptions } from "./interface";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig:FirabaseConfigOptions = {
  apiKey: "AIzaSyCoFCccc4nfVaRTQnF7znxWxb0ddxRAKdU",
  authDomain: "ecommerce-8797a.firebaseapp.com",
  projectId: "ecommerce-8797a",
  storageBucket: "ecommerce-8797a.appspot.com",
  messagingSenderId: "514185751778",
  appId: "1:514185751778:web:84a1e312195a37ad14c2bb",
  measurementId: "G-MXYHXVHW2L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);