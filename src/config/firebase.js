
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCugBNWKfEP4NfHHl1mNaW53HRh9-z9QZ8",
  authDomain: "dyn-react-image-display.firebaseapp.com",
  projectId: "dyn-react-image-display",
  storageBucket: "dyn-react-image-display.appspot.com",
  messagingSenderId: "906582903541",
  appId: "1:906582903541:web:0a72f625c97b5d1ffc13bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);