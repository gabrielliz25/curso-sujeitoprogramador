import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDr9vU8cd2ipZX86Q-OMB5PKsCIdL9wC2k",
    authDomain: "cursosujeitoprogamador-22d7c.firebaseapp.com",
    projectId: "cursosujeitoprogamador-22d7c",
    storageBucket: "cursosujeitoprogamador-22d7c.firebasestorage.app",
    messagingSenderId: "761443684015",
    appId: "1:761443684015:web:9ddf913f74000611c68e5a",
    measurementId: "G-Q6VBRHBKL8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
