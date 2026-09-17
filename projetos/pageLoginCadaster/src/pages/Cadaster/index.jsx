import { useState } from "react";
import { cadasterUser } from "../../services/user";
import {useNavigate} from "react-router"
import "./Cadaster.css";

const Cadaster = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if (!nome || !email || !password) {
            alert("Preencha todos os dados!");
            return;
        }

        const userCreated = await cadasterUser(nome, email, password);
        if (!userCreated) {
            alert("Erro ao criar usuario");
            return;
        }

        setNome("");
        setEmail("");
        setPassword("");
        navigate("/login")
    };

    return (
        <div className="cadaster-container">
            <form className="cadaster-form" onSubmit={handleSubmit}>
                <h2 className="cadaster-title">Cadastro</h2>

                <div className="cadaster-field">
                    <label htmlFor="nome">Nome</label>
                    <input
                        id="nome"
                        type="text"
                        placeholder="Digite o seu nome..."
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div className="cadaster-field">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Digite o seu email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="cadaster-field">
                    <label htmlFor="password">Senha</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Digite a sua senha..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="cadaster-btn" type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default Cadaster;
