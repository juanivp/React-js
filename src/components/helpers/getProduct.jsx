import React from 'react'
import arrayProducts from '../../data/data';
import firestoreDB from '../../services/firebase';
import { getDocs, collection } from firebase/firestore

// funcion que comente para probar firebase. Si logro que funcione la borro definitivamente
// function getProductos() {
//     return new Promise((resolve) => {
//         setTimeout(() => { resolve(arrayProducts) }, 500);
//     });
// };
function getProductos() {
    return new Promise((resolve) => {
        const ventaDeLeniacollection = collection(firestoreDB, "ventadelenia");
        const docsSnapshot = getDocs(ventaDeLeniacollection);
        resolve([]);
    });
};


export default getProductos