import { useState } from "react";
import logo from "../public/logo.png";
import "./App.css";
import { categorias, type Category } from "./db/words.ts";

const App = () => {
    const [categCurrent, setCategCurrent] = useState<number | null>(null);
    const [frase, setFrase] = useState("");

    const handleGerar = () => {
        if (!categCurrent) return;

        const categoria = categorias.find(
            (categoria) => categoria.id === categCurrent,
        );

        if (!categoria) return;

        const index = Math.floor(Math.random() * categoria.frases.length);

        const fraseAleatoria = categoria.frases[index];
        setFrase(fraseAleatoria);
    };

    return (
        <div className="app-container">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="info-acts">
                <h2>Categorias</h2>
                <div className="btns">
                    {categorias.map((categoria: Category) => (
                        <button onClick={() => setCategCurrent(categoria.id)}>
                            {categoria.categoria}
                        </button>
                    ))}
                </div>
                <div className="frases-container">
                    <button onClick={handleGerar}>Gerar Frase</button>
                    <span className="fraseCurrent">
                        {frase}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default App;
