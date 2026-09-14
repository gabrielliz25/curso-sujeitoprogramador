import { useState } from "react";

const Forms = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Cadastrado");
        console.log({ nome, email, idade });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={nome}
                    onChange={(evt) => setNome(evt.target.value)}
                    type="text"
                    placeholder="Digite seu nome"
                    name="nome"
                />
                <br />
                <input
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                    type="text"
                    placeholder="Digite seu email"
                    name="email"
                />
                <br />
                <input
                    value={idade}
                    onChange={(evt) => setIdade(evt.target.value)}
                    type="text"
                    placeholder="Digite sua idade"
                    name="idade"
                />
                <br />
                <button type="submit">Cadastrar</button>
            </form>

            <div>
                <p>Nome: {nome}</p>
                <p>Email: {email}</p>
                <p>idade: {idade}</p>
            </div>
        </>
    );
};

export default Forms;
