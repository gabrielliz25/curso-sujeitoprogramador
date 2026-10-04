import { useCounter } from "./context/useContext";

const App = () => {
    const {
        counter,
        incrementar,
        resetCounter,
        step,
        setStep,
        stepCounter,
        op,
        setOp,
    } = useCounter();
    return (
        <div>
            <h1>Contador Global!</h1>
            <span>Contador: {counter}</span>
            <br />
            <button onClick={incrementar}>+1</button>
            <br />
            <button onClick={resetCounter}>Resetar Contador</button>
            <br />
            <br />
            <input
                type="text"
                value={step}
                onChange={(e) => setStep(e.target.value)}
            />{" "}
            <br />

            <label>
                <input
                    type="radio"
                    name="opcao"
                    value="soma"
                    checked={op === "soma"}
                    onChange={(e) => setOp(e.target.value)}
                />
                Soma
            </label>
            
            <label>
                <input
                    type="radio"
                    name="opcao"
                    value="sub"
                    checked={op === "sub"}
                    onChange={(e) => setOp(e.target.value)}
                />
                Subtração
            </label>

            <label>
                <input
                    type="radio"
                    name="opcao"
                    value="mult"
                    checked={op === "mult"}
                    onChange={(e) => setOp(e.target.value)}
                />
                Multiplicação
            </label>

            <label>
                <input
                    type="radio"
                    name="opcao"
                    value="div"
                    checked={op === "div"}
                    onChange={(e) => setOp(e.target.value)}
                />
                Divisão
            </label>

            <br />
            <button onClick={stepCounter}>Alterar</button>
        </div>
    );
};

export default App;
