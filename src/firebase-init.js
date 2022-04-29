// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVg5rxWUECUU-5FimUH9bfX--3UJb-45M",
  authDomain: "fruites-wirehouse.firebaseapp.com",
  projectId: "fruites-wirehouse",
  storageBucket: "fruites-wirehouse.appspot.com",
  messagingSenderId: "36923350342",
  appId: "1:36923350342:web:13238cef24149a06939947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth