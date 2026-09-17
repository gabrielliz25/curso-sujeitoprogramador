import { useState } from "react";
import { loginUser } from "../../services/user"
import {useNavigate} from "react-router"
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const userLogged = await loginUser(email, password)
        if (!userLogged) {
            alert("Erro ao logar usuario");
            return;
        }

        navigate("/")
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-title">Login</h2>

                <div className="login-field">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Digite o seu email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="login-field">
                    <label htmlFor="password">Senha</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Digite a sua senha..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="login-btn" type="submit">
                    Entrar
                </button>
            </form>
        </div>
    );
};

export default Login;
