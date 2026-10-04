import { useState } from "react";
import { TemaContext } from "./TemaContext";

interface TemaProviderProps {
    children: React.ReactNode;
}

function TemaProvider({ children }: TemaProviderProps) {
    const [tema, setTema] = useState("light")

    const changeTema = () => {
        setTema(tema === "light" ? "dark" : "light")
    }

    return (
        <TemaContext.Provider
            value={{
                tema,
                changeTema
            }}
        >
            {children}
        </TemaContext.Provider>
    );
}

export default TemaProvider;