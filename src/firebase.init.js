// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJdQYmDGJBsSck9-YFJX-M56y29ah81MY",
  authDomain: "warehouse-firm.firebaseapp.com",
  projectId: "warehouse-firm",
  storageBucket: "warehouse-firm.appspot.com",
  messagingSenderId: "297434918778",
  appId: "1:297434918778:web:99aeed1a5be1cc6e0670c3",
  measurementId: "G-FW289T4X5H"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;