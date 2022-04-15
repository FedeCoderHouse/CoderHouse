// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2mrRRQYOoYT73hpiKmh8Wsomwfj8Nx2A",
  authDomain: "ecommercemuebles-b20a6.firebaseapp.com",
  projectId: "ecommercemuebles-b20a6",
  storageBucket: "ecommercemuebles-b20a6.appspot.com",
  messagingSenderId: "998424621915",
  appId: "1:998424621915:web:6e28dccedacc81aaf4a07e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db