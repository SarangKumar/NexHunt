import db from "../../lib/firebaseServer"
import { collection, doc, getDocs } from "firebase/firestore";


export default async function handler(req, res) {
    if (req.method != 'GET') {
        res.status(405).json({ body: "Method not allowed" })
        return;
    }
    const querySnap=await getDocs(collection(db,"Questions"));
    querySnap.forEach((doc)=>{
        console.log(doc.id,"=>",doc.data());
    })
    res.status(200)
}