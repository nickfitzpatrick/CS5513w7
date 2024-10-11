// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwJm-vr0ROCLiuk584l_wUN2Xiw9wIaI0",
  authDomain: "cs5513w7.firebaseapp.com",
  projectId: "cs5513w7",
  storageBucket: "cs5513w7.appspot.com",
  messagingSenderId: "320578434030",
  appId: "1:320578434030:web:3e5ebbe105c24a3b1094ff",
  measurementId: "G-0DNNSJ0G3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);