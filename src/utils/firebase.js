// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-TCv-QCR8MGAGNFjMgZ-RhEB6OiVWx0A",
  authDomain: "netflixgpt-7f9d7.firebaseapp.com",
  projectId: "netflixgpt-7f9d7",
  storageBucket: "netflixgpt-7f9d7.appspot.com",
  messagingSenderId: "1086497874312",
  appId: "1:1086497874312:web:288b776af7e3d60945da3d",
  measurementId: "G-3DCDHTK2K3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();