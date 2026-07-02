import {
    addDoc,
    collection,
    serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export async function createTask(
    title: string,
    description: string,
    userId: string
) {
    await addDoc(collection(db, "tasks"), {
        title,
        description,
        completed: false,
        userId,
        createdAt: serverTimestamp(),
    });
}