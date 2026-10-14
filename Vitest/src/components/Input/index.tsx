import { useState } from "react";

const Input = () => {
    const [name, setName] = useState("");

    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Digite o nome" />
            {name && <span data-testid="text">Bem vindo: {name}</span>}
        </div>
    );
};

export default Input;
