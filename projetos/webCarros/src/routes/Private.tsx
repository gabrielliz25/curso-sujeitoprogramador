import { useAuth } from "../context/useAuth";
import { Navigate } from "react-router-dom";

interface PrivateProps {
    children: React.ReactNode;
}

const Private = ({ children }: PrivateProps) => {
    const { signed, loadingUser } = useAuth();

    if (loadingUser) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Usuário carregando
            </div>
        );
    }

    if (!signed) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default Private;
