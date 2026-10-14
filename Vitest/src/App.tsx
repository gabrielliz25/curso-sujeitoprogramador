import Button from "./components/Button";
import Content from "./components/Content";
import Click from "./components/Click";

const App = () => {
    return (
        <div>
            <h1>React com testes</h1>
            <Button />
            <Content />
            <Click onClick={() => console.log("Fui clicado")} disabled={false}>
                Clique em mim
            </Click>
        </div>
    );
};

export default App;
