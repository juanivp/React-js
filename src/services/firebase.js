import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

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

export default firestoreDB
