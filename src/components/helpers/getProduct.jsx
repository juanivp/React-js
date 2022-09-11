import firestoreDB from '../../services/firebase';
import { getDocs, getDoc, collection, query, where, doc } from 'firebase/firestore';

export function getProductos() {
    return new Promise((resolve) => {

        const ventaDeLeniacollection = collection(firestoreDB, "ventadelenia");

        getDocs(ventaDeLeniacollection).then( snapshot => {
            const docsData = snapshot.docs.map (doc => {
                return { ...doc.data(), id: doc.id}
                doc.data()}
                );
            resolve(docsData)
        })
    });
};

export function getProductosByCategory(categoryParam) {
    return new Promise((resolve) => {

        const ventaDeLeniacollectionRef = collection(firestoreDB, "ventadelenia");

        const q = query(ventaDeLeniacollectionRef, where("category", "==", categoryParam))

        getDocs(q).then( snapshot => {
            const docsData = snapshot.docs.map (doc => {
                return { ...doc.data(), id: doc.id}
                doc.data()}
                );
            resolve(docsData)
        })
    });
};

export function getProductoById(id) {
    return new Promise((resolve) => {

        const ventaDeLeniacollectionRef = collection(firestoreDB, "ventadelenia");
        
        const docRef = doc(ventaDeLeniacollectionRef, id);

        getDoc(docRef).then( snapshot => {
            resolve(
                { ...snapshot.data(), id: snapshot.id }
                )
        })
    });
};
