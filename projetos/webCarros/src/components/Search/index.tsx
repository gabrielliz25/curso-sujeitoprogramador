interface SearchProps {
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
}

const Search = ({ value, onChange, onSearch }: SearchProps) => {
    return (
        <div className="mx-auto flex w-full max-w-4xl gap-3 pt-4">
            <input
                type="text"
                placeholder="Digite o nome do carro..."
                value={value}
                onChange={(event) => onChange(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        onSearch();
                    }
                }}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />

            <button
                type="button"
                onClick={onSearch}
                className="cursor-pointer rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
            >
                Buscar
            </button>
        </div>
    );
};

export default Search;
