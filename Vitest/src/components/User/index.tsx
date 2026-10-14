import { useState, type FormEvent } from "react";

const User = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        console.log("Usuario cadastrado!")
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Digite o seu nome: </label>
            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />{" "}
            <br />
            <label>Digite o seu email: </label>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default User;
