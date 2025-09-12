import { collection, query, where, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebase";
import type { ItemsProducts } from "./logic";

export async function getProducts(words:string):Promise<ItemsProducts[]> {
    const qry = query(collection(db, "libros"), where('titulo', '==', words));
    const snapshot = await getDocs(qry);
    return snapshot.docs.map(doc =>({
        id:doc.id,
        foto:doc.data().imagen,
        titulo:doc.data().titulo,
        autor:doc.data().autor,
        index:doc.data().titulo.toLowerCase().indexOf,
    }));
};
