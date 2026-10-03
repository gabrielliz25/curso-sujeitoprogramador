import { createContext } from "react";

type UserContextType = {
    aluno: string;
    qtdAluno: number;
    setAluno: (aluno: string) => void;
    setQtdAluno: (qtdAluno: number) => void;
};

export const UserContext = createContext({} as UserContextType);
