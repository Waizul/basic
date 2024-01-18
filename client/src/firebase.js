// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realstate-74617.firebaseapp.com",
  projectId: "realstate-74617",
  storageBucket: "realstate-74617.appspot.com",
  messagingSenderId: "125037179540",
  appId: "1:125037179540:web:f6d3b0164cad8eeb147a81"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);