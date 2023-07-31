import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getFirestore} from "firebase/firestore"



const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export default db;
