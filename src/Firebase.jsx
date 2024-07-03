// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDec43J9zssaXgHWiUxG4ktVTErFV9n1fU",
  authDomain: "fir-de987.firebaseapp.com",
  projectId: "fir-de987",
  storageBucket: "fir-de987.appspot.com",
  messagingSenderId: "372113299806",
  appId: "1:372113299806:web:ae0f4e2f68b1c1299b17cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
// const analytics = getAnalytics(app);