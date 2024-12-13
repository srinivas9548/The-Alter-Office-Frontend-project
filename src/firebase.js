// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBBQ0pAe9JNRBIBXNgFBPqAyeR0lcS6wR0",
    authDomain: "social-media-feed-project.firebaseapp.com",
    projectId: "social-media-feed-project",
    storageBucket: "social-media-feed-project.firebasestorage.app",
    messagingSenderId: "742066790961",
    appId: "1:742066790961:web:09c33d3a400bb5387e6b10",
    measurementId: "G-D6QS8530DX"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
