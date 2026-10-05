const Carrinho = () => {
    return (
        <div className="w-full max-w-5xl m-auto mt-5">
            <h1 className="font-bold text-center text-2xl">Meu Carrinho</h1>
            <section className="mt-5 border border-gray-400 rounded-xl shadow-lg p-4 px-15 flex justify-between items-center ">
                <img
                    src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9TCivULzkxVUhPn0y1jOCFXl1k7UbjZupQhfMd5SpOKVw0n214dj9S5IsMlnrqXSSXLzJCJLw7c3cY2sufcBUHTfgEMy6i8nNz_MYvQGd0U0xMXYUE4n0dg"
                    alt="Logo do produto"
                    className="h-24 object-contain"
                />
                <span className="font-bold">Preço: R$1.000</span>
                <div className="flex gap-3">
                    <button className="bg-gray-700 text-white px-2.5 rounded-2xl flex items-center justify-center font-medium cursor-pointer">
                        -
                    </button>
                    <span className="font-bold">1</span>
                    <button className="bg-gray-700 text-white px-2 rounded-2xl flex items-center justify-center font-medium cursor-pointer">
                        +
                    </button>
                </div>
                <span className="font-bold">SubTotal: R$1.000</span>
            </section>
            <hr className="my-5 text-gray-400" />
            <span className="text-gray-400">Total: R$1.000</span>
        </div>
    );
};

export default Carrinho;
