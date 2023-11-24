// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK3b-vVRkYTOPDL8Qpjoerx8SWFGY2XJM",
  authDomain: "reviewapp-e124e.firebaseapp.com",
  projectId: "reviewapp-e124e",
  storageBucket: "reviewapp-e124e.appspot.com",
  messagingSenderId: "48947531016",
  appId: "1:48947531016:web:ee9bde68e54a084004f0bd",
  measurementId: "G-Q6G0QZVRST",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(firebaseApp);
const firebaseui = require("firebaseui");
// Initialize the FirebaseUI Widget using Firebase.
export const firebaseUi = new firebaseui.auth.AuthUI(firebaseAuth);
