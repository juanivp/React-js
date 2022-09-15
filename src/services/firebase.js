import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvOmoYmpfQm32E0gDPqGIYkibLxHppTjM",
  projectId: "react34710-coderhouse",
  storageBucket: "react34710-coderhouse.appspot.com",
  messagingSenderId: "51841111571",
  appId: "1:51841111571:web:f065bdab8de88d261591e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

const itemsdata = [];
// Creo una nueva DB y por cada order hecha en mi app creo un item
export async function saveProductsToFirebase() {
  const ordersCollection = collection(firestoreDB, "orders");

  for (let item of itemsdata) {
    const docref = await addDoc(ordersCollection, item);
    console.log("documento creado con id:", docref.id);
  }
}

export default firestoreDB