import { useState } from "react";

interface InfoAlunoProps {
    nome: string;
    idade: string;
}

const State = () => {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>();

    const showAluno = () => {
        setInfoAluno({
            nome,
            idade,
        });
    };

    return (
        <div>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome"
            />{" "}
            <br />
            <input
                type="text"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                placeholder="Digite a idade"
            />{" "}
            <br />
            <button onClick={showAluno}>Mostrar Aluno</button> <br />
            {infoAluno && (
                <span>{infoAluno.nome} - {infoAluno.idade} anos</span>
            )}

            <hr />

            
        </div>
    );
};

export default State;
