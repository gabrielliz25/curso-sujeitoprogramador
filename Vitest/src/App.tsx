import Button from "./components/Button";
import Content from "./components/Content";
import Click from "./components/Click";
import Input from "./components/Input";

const App = () => {
    return (
        <div>
            <h1>React com testes</h1>
            <Button />
            <Content />
            <Click onClick={() => console.log("Fui clicado")} disabled={false}>
                Clique em mim
            </Click>
            <Input />
        </div>
    );
};

export default App;
