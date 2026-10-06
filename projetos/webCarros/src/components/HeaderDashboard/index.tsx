import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

// Context
import { useAuth } from "../../context/useAuth";

const HeaderDashboard = () => {
    const { user, logout } = useAuth();

    return (
        <header className="my-5 mx-auto flex max-w-6xl items-center justify-between rounded-xl bg-red-700 px-6 py-4 text-white">
            <h1 className="text-xl font-semibold">Bem-vindo, {user?.name}!</h1>

            <div className="flex items-center gap-6">
                <Link
                    to="/dashboard"
                    className="font-medium transition hover:text-red-200"
                >
                    Dashboard
                </Link>

                <Link
                    to="/dashboard/new"
                    className="font-medium transition hover:text-red-200"
                >
                    Novo
                </Link>

                <button
                    className="rounded-lg p-2 transition hover:bg-red-800 hover:text-red-200 cursor-pointer"
                    onClick={logout}
                >
                    <CiLogout size={24} />
                </button>
            </div>
        </header>
    );
};

export default HeaderDashboard;
