import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import "./Home.css";

const Home = () => {
    const [user, setUser] = useState(false);
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userCurrent) => {
            if (userCurrent) {
                setUser(true);
                setUserDetails({
                    uid: userCurrent.uid,
                    email: userCurrent.email,
                    nome: userCurrent.displayName,
                });
            } else {
                setUser(false);
                setUserDetails({});
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="home-container">
            {user ? (
                <h1 className="home-welcome">
                    Bem vindo(a), <span>{userDetails.nome}</span>
                </h1>
            ) : (
                <h1 className="home-welcome">Logue para saber mais informações</h1>
            )}
        </div>
    );
};

export default Home;
