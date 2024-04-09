// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLTgl2ntL4ezUyQlIVuOMHWVPU6C60pRk",
    authDomain: "homely-haven-4d1ec.firebaseapp.com",
    projectId: "homely-haven-4d1ec",
    storageBucket: "homely-haven-4d1ec.appspot.com",
    messagingSenderId: "1066504247958",
    appId: "1:1066504247958:web:ede71f1c8fc2f55285c0b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);