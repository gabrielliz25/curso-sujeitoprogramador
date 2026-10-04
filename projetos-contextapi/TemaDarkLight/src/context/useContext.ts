import { useContext } from "react";
import { TemaContext } from "./TemaContext";

export const useTema = () => {
    return useContext(TemaContext);
};