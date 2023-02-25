import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBeJqXTBEsxN3yOSJJ0-ivJSPqNfUSdt14",
  authDomain: "nexhunt-c79b7.firebaseapp.com",
  projectId: "nexhunt-c79b7",
  storageBucket: "nexhunt-c79b7.appspot.com",
  messagingSenderId: "976545916255",
  appId: "1:976545916255:web:ba3c74a432856e33d042ea",
  measurementId: "G-CVTLSFKZQT"
};

const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export default db;
