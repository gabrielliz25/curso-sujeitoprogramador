import { useState } from "react";
import { UserContext } from "./UserContext";

interface UserProviderProps {
    children: React.ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
    const [aluno, setAluno] = useState("Maria silva");
    const [qtdAluno, setQtdAluno] = useState(1);

    return (
        <UserContext.Provider
            value={{
                aluno,
                qtdAluno,
                setAluno,
                setQtdAluno,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
