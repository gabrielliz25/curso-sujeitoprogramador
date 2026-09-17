import { auth } from "../config/firebase";
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";

const checkUserLogged = () => {
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            if (user) resolve(user);
            else resolve(null);
        });
    });
};

const cadasterUser = async (nome, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Usuário criado:", userCredential.user);
            return updateProfile(userCredential.user, { displayName: nome });
        })
        .then(() => {
            return true;
        })
        .catch((err) => {
            console.log("Código do erro:", err.code);
            console.log("Mensagem:", err.message);
            return false;
        });
};

const loginUser = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Usuário logado:", userCredential.user);
            return true;
        })
        .catch((err) => {
            console.log("Código do erro:", err.code);
            console.log("Mensagem:", err.message);
            return false;
        });
};

const logout = async () => {
    return signOut(auth)
        .then(() => {
            console.log("Usuario deslogado!");
        })
        .catch((err) => {
            console.log("Código do erro:", err.code);
            console.log("Mensagem:", err.message);
            return false;
        });
};

export { checkUserLogged, cadasterUser, loginUser, logout };
