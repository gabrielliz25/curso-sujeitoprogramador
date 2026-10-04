import { createContext } from "react";

type TemaContextType = {
    tema: string,
    changeTema: () => void
};

export const TemaContext = createContext({} as TemaContextType);