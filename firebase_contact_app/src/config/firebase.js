// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3k3rx5dxu0bRma3Hv5oheOHSClJU60i0",
  authDomain: "vite-contact-ba814.firebaseapp.com",
  projectId: "vite-contact-ba814",
  storageBucket: "vite-contact-ba814.firebasestorage.app",
  messagingSenderId: "671724714470",
  appId: "1:671724714470:web:417b77f727cb425db6fe27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);