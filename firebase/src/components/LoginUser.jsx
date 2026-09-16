import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const LoginUser = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(false);
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {  
        // permanecer logado
        async function checkUser() {
            onAuthStateChanged(auth, (user) => {
                if(user) {
                    // se estiver logado...
                    console.log(user) 
                    setUser(true);
                    setUserDetails({
                        uid: user.uid,
                        email: user.email,
                    })
                } else {
                    // se nao estiver logado...
                    console.log("Usuário não logado")
                }
            })
        }

        checkUser()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, email, password)
            .then((value) => {
                alert("Usuário logado com sucesso!");
                setEmail("");
                setPassword("");

                setUserDetails({
                    uid: value.user.uid,
                    email: value.user.email,
                });
                setUser(true);
            })
            .catch((err) => console.log(err));
    };

    const logout = async () => {
        await signOut(auth)
            .then(() => {
                setUser(false);
                setUserDetails({});
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    placeholder="Digite o seu email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />{" "}
                <br />
                <label htmlFor="password">Senha: </label>
                <input
                    type="password"
                    placeholder="Digite a sua senha..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />{" "}
                <br />
                <button type="submit">Logar</button>
            </form>

            <div>
                {user && (
                    <>
                        <p>Usuário logado: {userDetails.email}</p>
                        <button onClick={logout}>Deslogar</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginUser;
