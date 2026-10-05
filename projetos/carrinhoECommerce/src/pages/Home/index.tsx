import { FaCartPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { type ProductsProps } from "../../type/Commerce";
import { useCommerce } from "../../context/useContext";

const Home = () => {
    const [products, setProducts] = useState<ProductsProps[]>([]);
    const { addCartItem } = useCommerce();

    useEffect(() => {
        async function getProducts() {
            const response = await api.get("/products");
            setProducts(response.data);
        }

        getProducts();
    }, []);

    const handleAddProduct = (product: ProductsProps) => {
        addCartItem(product);
    };

    return (
        <div className="w-full max-w-5xl m-auto mt-5">
            <h1 className="font-bold text-center text-2xl">Produtos em alta</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 mt-3">
                {products &&
                    products.map((product: ProductsProps) => (
                        <section className="relative border border-gray-400 rounded-2xl p-3 shadow-xl">
                            <img
                                src={product.cover}
                                alt="Logo do produto"
                                className="w-full h-48 object-contain mb-3"
                            />
                            <p className="font-bold">{product.title}</p>

                            <span>R$ {product.price}</span>
                            <button
                                className="absolute top-2 right-2 p-2 hover:bg-black rounded-[50%] hover:text-white transition-all duration-300 cursor-pointer"
                                onClick={() => handleAddProduct(product)}
                            >
                                <FaCartPlus className="text-lg" />
                            </button>
                        </section>
                    ))}
            </div>
        </div>
    );
};

export default Home;
