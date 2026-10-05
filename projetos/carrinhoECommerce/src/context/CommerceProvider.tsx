import { useState } from "react";
import { CommerceContext } from "./CommerceContext";
import { type CartProps, type ProductsProps } from "../type/Commerce";

interface CommerceProviderProps {
    children: React.ReactNode;
}

function CommerceProvider({ children }: CommerceProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([]);
    console.log(cart);
    const addCartItem = (product: ProductsProps) => {
        const itemIndex = cart.findIndex((items) => items.id === product.id);

        if (itemIndex !== -1) {
            // o item ja está adicionado no cart

            setCart((prev) =>
                prev.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              amount: item.amount + 1,
                          }
                        : item,
                ),
            );
        }

        const data = {
            ...product,
            amount: 1,
            total: product.price,
        };

        setCart((prev) => [...prev, data]);
    };

    return (
        <CommerceContext.Provider
            value={{
                cart,
                setCart,
                cartAmount: cart.length,
                addCartItem,
            }}
        >
            {children}
        </CommerceContext.Provider>
    );
}

export default CommerceProvider;
