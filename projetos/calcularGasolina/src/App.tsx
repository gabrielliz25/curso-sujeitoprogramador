import { useState} from "react";
import imgLogo from "../public/logo.png";
import "./App.css";

interface InfoProps {
    title: string,
    pAlcool: number,
    pGasolina: number
}



const App = () => {
    const [precoG, setPrecoG] = useState("");
    const [precoA, setPrecoA] = useState("");
    const [info, setInfo] = useState<InfoProps>()

    const resStyle: React.CSSProperties = {
        display: info ? "block" : "none" 
    }

    const calcularPreco = (event: React.FormEvent) => {
        event.preventDefault()

        const gasolina = parseFloat(precoG.replace(",", "."))
        const alcool = parseFloat(precoA.replace(",", "."))
    
        if (isNaN(gasolina) || isNaN(alcool)) {
            alert("Digite valores válidos")
            return
        }

        const calculo = (alcool / gasolina)
        
        setInfo({
            title: calculo <= 0.7 ? "Compensa usar Álcool" : "Compensa usar Gasolina",
            pAlcool: alcool,
            pGasolina: gasolina
        })
    
    }

    return (
        <div className="container-app">
            <div className="img-container">
                <img src={imgLogo} alt="" />
            </div>

            <div className="form-container">
                <form onSubmit={calcularPreco}>
                    <input
                        type="text"
                        placeholder="Preço do Álcool"
                        value={precoA}
                        onChange={(e) => setPrecoA(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Preço da Gasolina"
                        value={precoG}
                        onChange={(e) => setPrecoG(e.target.value)}
                    />
                    <button type="submit">Calcular</button>
                </form>
            </div>

            <div className="res-calc" style={resStyle}>
                <h2>{info?.title}</h2>
                <span>Preço do Álcool: {info?.pAlcool}</span> <br />
                <span>Preço da Gasolina: {info?.pGasolina}</span>
            </div>
        </div>
    );
};

export default App;
