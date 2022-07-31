// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyZRxV6jYCLqTT6I7TvN6HbuMr2dpW1JI",
  authDomain: "gym-web-application-8ccc9.firebaseapp.com",
  projectId: "gym-web-application-8ccc9",
  storageBucket: "gym-web-application-8ccc9.appspot.com",
  messagingSenderId: "440768480740",
  appId: "1:440768480740:web:be1c722dad4870239573f1",
  measurementId: "G-Z9MPBRC9H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore()

export {db}