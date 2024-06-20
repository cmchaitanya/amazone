// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgaOd_6mRpL1rW5cSZh6yGSTw7ds_2yQs",
  authDomain: "fir-c343c.firebaseapp.com",
  databaseURL: "https://fir-c343c-default-rtdb.firebaseio.com",
  projectId: "fir-c343c",
  storageBucket: "fir-c343c.appspot.com",
  messagingSenderId: "39462742342",
  appId: "1:39462742342:web:9b88361b82853aed9cdd47",
  measurementId: "G-55WXQPMZR3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
// const analytics = getAnalytics(app);