import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { toast } from "react-toastify"

const CadasterUser = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if (!email || !password) {
            alert("Preencha todos os campos!");
            return
        }

        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.success("Usuário cadastrado com sucesso!");
                setEmail("");
                setPassword("");
            })
            .catch(err => {
                if(err.code === "auth/weak-password") {
                    toast.error("Senha deve ter no mínimo 6 caracteres")
                } else if (err.code === "auth/email-already-in-use") {
                    toast.error("Email já cadastrado")
                }
            })
    }

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
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadasterUser;
