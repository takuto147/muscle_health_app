// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIKP9xWUqmmlk65izgfApOCGXeU-pLKYs",
  authDomain: "muscle-health-auth.firebaseapp.com",
  projectId: "muscle-health-auth",
  storageBucket: "muscle-health-auth.appspot.com",
  messagingSenderId: "619210228713",
  appId: "1:619210228713:web:abd8e49ce85a133eed8178",
  measurementId: "G-JWLY3ZE8T4"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
