const Search = () => {
    return (
        <div className="pt-4 mx-auto flex w-full max-w-4xl gap-3">
            <input
                type="text"
                placeholder="Digite o nome do carro..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />

            <button className="cursor-pointer rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700">
                Buscar
            </button>
        </div>
    );
};

export default Search;
