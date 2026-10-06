const Card = () => {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md cursor-pointer">
            <img
                src="https://http2.mlstatic.com/D_NQ_NP_720822-MLA89575983441_082025-B.webp"
                alt="Foto do carro"
                className="h-48 w-full object-cover sm:h-52"
            />

            <div className="p-4">
                <p className="truncate text-base font-semibold text-gray-900">
                    Nome do carro marca modelo
                </p>

                <span className="mt-1 block text-sm text-gray-500">
                    2025 | 10.000 km
                </span>

                <p className="mt-4 text-xl font-bold text-red-600">
                    R$ 1.000.000
                </p>

                <hr className="my-4 border-gray-200" />

                <span className="text-sm text-gray-500">Cidade - Estado</span>
            </div>
        </div>
    );
};

export default Card;
