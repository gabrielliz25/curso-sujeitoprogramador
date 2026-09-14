import { useState } from "react";

const App = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [show, setShow] = useState(false);
    const [users, setUsers] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!nome || !email || !senha) {
            alert("Preencha os campos!");
            return;
        }

        const newUser = { nome, email, senha };
        setUsers([...users, newUser]);
    };

    return (
        <>
            <h1>Cadastro de Usuários</h1>

            <form onSubmit={handleSubmit}>
                <input
                    value={nome}
                    onChange={(evt) => setNome(evt.target.value)}
                    type="text"
                    placeholder="Digite seu nome"
                    name="nome"
                />{" "}
                <br />
                <input
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                    type="text"
                    placeholder="Digite seu email"
                    name="email"
                />{" "}
                <br />
                <input
                    value={senha}
                    onChange={(evt) => setSenha(evt.target.value)}
                    type="text"
                    placeholder="Digite sua senha"
                    name="senha"
                />{" "}
                <br />
                <button type="submit">Cadastrar</button>
            </form>

            <div>
                {users &&
                    users.map((user) => (
                        <>
                            <hr />
                            <div>
                                <span>{user.nome}</span> <br />
                                <span>{user.email}</span> <br />
                                <button onClick={() => setShow(!show)}>
                                    {show ? "Ocultar Senha" : "Mostrar Senha"}
                                </button>{" "}
                                = {show && <span>{user.senha}</span>}
                            </div>
                        </>
                    ))}
            </div>
        </>
    );
};

export default App;
