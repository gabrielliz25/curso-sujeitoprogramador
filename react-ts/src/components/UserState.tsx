import { useState } from "react";

interface UserProps {
    nome: string,
    cargo: string
}

const UserState = () => {
    const [user, setUser] = useState<UserProps>({
        nome: "Visitante",
        cargo: ""
    })

    const handleLogin = () => {
        setUser({
            nome: "Gabriel",
            cargo: "admin"
        })
    }

    const handleLogout = () => {
        setUser({
            nome: "Visitante",
            cargo: ""
        })
    }

    return <div>
        <button onClick={handleLogin}>
            Entrar
        </button>
        <button onClick={handleLogout}>
            Sair
        </button>

        <div>
            <h1>Bem vindo {user?.nome}</h1>
            {user.cargo && (
                <span>Cargo: {user.cargo}</span>
            )}
        </div>
    </div>;
};

export default UserState;
