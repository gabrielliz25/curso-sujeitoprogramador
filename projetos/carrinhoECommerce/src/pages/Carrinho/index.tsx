import { useCommerce } from "../../context/useContext";

const Carrinho = () => {
    const { cart, addUni, removeUni, calcAllProducts } = useCommerce();

    return (
        <div className="w-full max-w-5xl m-auto mt-5">
            <h1 className="font-bold text-center text-2xl">Meu Carrinho</h1>

            {cart &&
                cart.map((product) => (
                    <section className="mt-5 border border-gray-400 rounded-xl shadow-lg p-4 px-15 flex justify-between items-center ">
                        <img
                            src={product.cover}
                            alt="Logo do produto"
                            className="h-24 object-contain"
                        />
                        <span className="font-bold">Preço: R${product.price}</span>
                        <div className="flex gap-3">
                            <button className="bg-gray-700 text-white px-2.5 rounded-2xl flex items-center justify-center font-medium cursor-pointer" onClick={() => removeUni(product)}>
                                -
                            </button>
                            <span className="font-bold">{product.amount}</span>
                            <button className="bg-gray-700 text-white px-2 rounded-2xl flex items-center justify-center font-medium cursor-pointer" onClick={() => addUni(product)}>
                                +
                            </button>
                        </div>
                        <span className="font-bold">SubTotal: R${product.total}</span>
                    </section>
                ))}

            <hr className="my-5 text-gray-400" />
            <span className="text-gray-400">Total: R${calcAllProducts()}</span>
        </div>
    );
};

export default Carrinho;
