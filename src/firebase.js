// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyqtswtqVMJUZrV2Bk4ThDIM6jc59ffqc",
  authDomain: "flightbookings-4bb2f.firebaseapp.com",
  projectId: "flightbookings-4bb2f",
  storageBucket: "flightbookings-4bb2f.firebasestorage.app",
  messagingSenderId: "883606045125",
  appId: "1:883606045125:web:4d5d229d61be9791ffcbac",
  measurementId: "G-Q86QQT5L9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
