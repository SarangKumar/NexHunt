import db from "../../lib/firebaseServer"
import { doc, getDoc } from "firebase/firestore";



export default async function handler(req, res) {
    if (req.method != 'POST') {
        res.status(405).json({ body: "Method not allowed" })
        return;
    }
    const docRef = doc(db,"Questions",req.body.questionId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
        res.status(405).json({ body: "Illegal Question ID" });
    } 
    const userAnswer=req.body.answer.toLowerCase()
    const answer=docSnap.answer.toLowerCase()
    if(answer!==userAnswer)
    {
        res.status(200).json({response:"Incorrect Answer"})
    }
    res.send(1)
    res.status(200)
}