import { useState } from "react";
import { CommerceContext } from "./CommerceContext";
import { type CartProps, type ProductsProps } from "../type/Commerce";

interface CommerceProviderProps {
    children: React.ReactNode;
}

function CommerceProvider({ children }: CommerceProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([]);

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
            return;
        }

        const data = {
            ...product,
            amount: 1,
            total: product.price,
        };

        setCart((prev) => [...prev, data]);
    };

    const addUni = (product: ProductsProps) => {
        setCart((prev) =>
            prev.map((item) => {
                if (item.id !== product.id) {
                    return item;
                }

                const newAmount = item.amount + 1;

                return {
                    ...item,
                    amount: newAmount,
                    total: newAmount * item.price,
                };
            }),
        );
    };

    const removeUni = (product: ProductsProps) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === product.id
                    ? {
                          ...item,
                          amount:
                              item.amount > 0 ? item.amount - 1 : item.amount,
                          total: item.price * item.amount,
                      }
                    : item,
            ),
        );
    };

    const calcAllProducts = () => {
        let total = 0

        cart.forEach((product) => {
            total += product.total
        })

        return total
    }

    return (
        <CommerceContext.Provider
            value={{
                cart,
                setCart,
                cartAmount: cart.length,
                addCartItem,
                addUni,
                removeUni,
                calcAllProducts
            }}
        >
            {children}
        </CommerceContext.Provider>
    );
}

export default CommerceProvider;
