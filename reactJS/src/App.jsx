// Aula de props
import Props from "./components/Props";

const App = () => {
    return (
        <>
            <h1>Projeto de ReactJS</h1>

            <Props titulo="Tenis da Nike" valor={199} />
            <Props titulo="Camisa da Lacoste" valor={280} />
        </>
    );
};

export default App;
