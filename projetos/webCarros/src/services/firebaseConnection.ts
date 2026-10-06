import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD_StyTmgOjzDOCGT0kKCVpQ3JNUj69Hzg",
    authDomain: "webcarros-969f1.firebaseapp.com",
    projectId: "webcarros-969f1",
    storageBucket: "webcarros-969f1.firebasestorage.app",
    messagingSenderId: "212409395660",
    appId: "1:212409395660:web:36703cec635fab7c8dd569",
    measurementId: "G-D0J7HZKEYG",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
