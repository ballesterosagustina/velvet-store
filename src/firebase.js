import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBhXPFRXK5KNAplsJpw5QL5VtZH7U5Wyac",
  authDomain: "store-cbe86.firebaseapp.com",
  projectId: "store-cbe86",
  storageBucket: "store-cbe86.appspot.com",
  messagingSenderId: "978533451742",
  appId: "1:978533451742:web:5a0646a245d9f438cc7f4f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);