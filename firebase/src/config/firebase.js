import { initializeApp } from "firebase/app";

// config do banco de dados (cloudfire)
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDr9vU8cd2ipZX86Q-OMB5PKsCIdL9wC2k",
    authDomain: "cursosujeitoprogamador-22d7c.firebaseapp.com",
    projectId: "cursosujeitoprogamador-22d7c",
    storageBucket: "cursosujeitoprogamador-22d7c.firebasestorage.app",
    messagingSenderId: "761443684015",
    appId: "1:761443684015:web:c6d578ecd2b9db0cc68e5a",
    measurementId: "G-E9RB1SCC97",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
