import { useUser } from "./context/useContext";

const App = () => {
    const { aluno, qtdAluno } = useUser();
    return (
        <h1>
            Opaa {aluno} - {qtdAluno}
        </h1>
    );
};

export default App;
