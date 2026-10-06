import { createContext } from "react";

type AuthContextType = {
    signed: boolean,
    loadingUser: boolean
};

export const AuthContext = createContext({} as AuthContextType);