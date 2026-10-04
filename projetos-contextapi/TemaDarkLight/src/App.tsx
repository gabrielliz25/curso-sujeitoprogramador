import { useTema } from "./context/useContext";
import "./App.css";

const App = () => {
    const { tema, changeTema } = useTema();
    return (
        <div className={`${tema === "light" ? "light" : "dark"} container`}>
            <span>Tema: {tema}</span>
            <button onClick={changeTema}>Alterar Tema</button>
        </div>
    );
};

export default App;
