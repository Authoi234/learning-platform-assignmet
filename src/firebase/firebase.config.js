// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiJayT53zb792yHEAFXkz9-5LMNISESWE",
  authDomain: "learning-platform-assignmemt.firebaseapp.com",
  projectId: "learning-platform-assignmemt",
  storageBucket: "learning-platform-assignmemt.appspot.com",
  messagingSenderId: "1057077134296",
  appId: "1:1057077134296:web:e058b4166f4fe9dd5ca8ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;