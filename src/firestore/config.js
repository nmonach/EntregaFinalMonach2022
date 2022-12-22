// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMZYIzrw17GZCIJUdQCRxNUrMigF2Kxj4",
  authDomain: "miticaamapola-3215b.firebaseapp.com",
  projectId: "miticaamapola-3215b",
  storageBucket: "miticaamapola-3215b.appspot.com",
  messagingSenderId: "258074182052",
  appId: "1:258074182052:web:f17dc07cffd8437d7c0131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFirestoreApp = () => {
    return app
}