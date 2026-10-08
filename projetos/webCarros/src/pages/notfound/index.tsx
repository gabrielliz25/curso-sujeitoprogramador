import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <main className="flex min-h-screen items-center justify-center px-4">
            <div className="text-center">
                <p className="text-8xl font-bold text-red-600">404</p>

                <h1 className="mt-4 text-3xl font-bold text-gray-900">
                    Página não encontrada
                </h1>

                <p className="mt-2 text-gray-500">
                    A página que você está procurando não existe.
                </p>

                <Link
                    to="/"
                    className="mt-6 inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                    Voltar para o início
                </Link>
            </div>
        </main>
    );
};

export default NotFound;
