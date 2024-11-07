// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGo8jV3Xbl9lV_DrCjQUHbJ9fSGkkWPy8",
  authDomain: "wuthreads.firebaseapp.com",
  projectId: "wuthreads",
  storageBucket: "wuthreads.firebasestorage.app",
  messagingSenderId: "130112212404",
  appId: "1:130112212404:web:30e9db83070cb1dc6776e1",
  measurementId: "G-DYLE7QZCL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics, firebaseConfig };