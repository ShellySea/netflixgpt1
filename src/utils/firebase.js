// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaAyLsohnki_qAJ-Gdr59AeDwdTfSiYvo",
  authDomain: "netflixgpt-575df.firebaseapp.com",
  projectId: "netflixgpt-575df",
  storageBucket: "netflixgpt-575df.appspot.com",
  messagingSenderId: "543718706861",
  appId: "1:543718706861:web:5c301675ceb03c82b6c024",
  measurementId: "G-WBHE84WCFB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
