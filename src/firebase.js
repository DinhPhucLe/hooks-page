// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFCGIFTKSZDynuvjql9OkZNnDLV5moGHw",
  authDomain: "test-6c14f.firebaseapp.com",
  projectId: "test-6c14f",
  storageBucket: "test-6c14f.appspot.com",
  messagingSenderId: "932903633427",
  appId: "1:932903633427:web:2964424d652691879735e6",
  measurementId: "G-8PSEELX8DM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);