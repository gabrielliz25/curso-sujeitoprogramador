import { Link } from "react-router";
import { useEffect, useState } from "react";
import { logout } from "../../services/user";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./Header.css";

const Header = () => {
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

    const desloga = async () => {
        const deslogado = await logout();
        if (deslogado) {
            setUser(false);
            setUserDetails({});
            // window.location.reload()
        }
    };

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <div>
                    {user ? (
                        <>
                            <span>{userDetails.email}</span>
                            <button onClick={desloga}>Deslogar</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Logar</Link>
                            <Link to="/cadaster">Cadastrar</Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
