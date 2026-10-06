import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

// types
import type { UserProps } from "../type/user";

// firebase
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../services/firebaseConnection"

interface AuthProviderProps {
    children: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps | null>(null)
    const [loadingUser, setLoadingUser] = useState(true)

    // verifica se tem usuario logado
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    name: user?.displayName,
                    email: user?.email,
                })
                setLoadingUser(false)
            } else {
                setUser(null)
                setLoadingUser(false)
            }
        })

        return () => {
            unsub()
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                loadingUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
