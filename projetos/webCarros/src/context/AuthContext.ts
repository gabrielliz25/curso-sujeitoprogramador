import { createContext } from "react";
import type { UserProps } from "../type/user";

type AuthContextType = {
    signed: boolean;
    loadingUser: boolean;
    handleUpdateUser: ({ uid, name, email }: UserProps) => void;
    user: UserProps | null,
    logout: () => void
};

export const AuthContext = createContext({} as AuthContextType);
