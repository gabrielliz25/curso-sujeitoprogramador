import { useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { type ProductsProps } from "../../type/Commerce";
import { useCommerce } from "../../context/useContext";

const Product = () => {
    const [product, setProduct] = useState<ProductsProps>();
    const { id } = useParams();
    const { addCartItem } = useCommerce();

    useEffect(() => {
        async function getProducts() {
            const response = await api.get("/products");
            response.data.forEach((item: ProductsProps) => {
                if (item.id === id) {
                    setProduct(item);
                }
            });
        }

        getProducts();
    }, [id]);

    const handleAddProduct = (product: ProductsProps) => {
        addCartItem(product);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10 p-6">
            {product && (
                <>
                    <img
                        src={product.cover}
                        alt=""
                        className="w-full max-w-md aspect-square object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-center gap-4">
                        <h2 className="text-3xl font-bold">{product.title}</h2>
                        <p className="text-gray-600">{product.description}</p>
                        <span className="text-2xl font-bold">
                            R${product.price}
                        </span>
                        <button
                            className="flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-lg w-fit cursor-pointer"
                            onClick={() => handleAddProduct(product)}
                        >
                            <FaCartPlus />
                            Adicionar ao carrinho
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Product;
